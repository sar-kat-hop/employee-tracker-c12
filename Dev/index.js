const inquirer = require('inquirer');
const { mainMenu, addDepartment, continuePrompt } = require('./utils/questions.js');
const mysql = require('mysql2/promise');
const cTable = require('console.table');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db',
    // waitForConnection: true,
    connectionLimit: 10,
    queueLimit: 0
});

//initialize vars
let rows = [];
let fields = [];
let connection;

//main menu
function menu() {
    inquirer.prompt(mainMenu).then((answer) => {
        if (answer.menu === 'viewDept') {
            viewDepartments();

        } else if (answer.menu === 'viewRole') {
            viewRoles();

        } else if (answer.menu === 'viewEmployee') {
            viewEmployees();

        } else if (answer.menu === 'addDept') {
            addNewDepartment();
        } else if (answer.menu === 'addRole') {
        //     console.log('Adding new role.');
            addNewRole();
        } else if (answer.menu === 'addEmployee') {
        //     console.log('Adding new employee.');
            addNewEmployee();
        // } else if (answer.menu === 'updateRole') {
        //     console.log('Updating existing role.');
        //     updateExistingRole();
        } else if (answer.menu === 'quit') {
            console.log('\n Now closing. Bye! \n');
            process.exit();
        }
    });
};

function continueMenu() {
    inquirer.prompt(continuePrompt).then((action) => {
        if (action.continue === 'yes') {
            console.log('\n' + 'Returning to main menu.' + '\n');
            menu();
        } else {
            console.log('\n' + 'Exiting program. Goodbye!' + '\n');
            process.exit();
        }
    });
};

async function viewEmployees() {
    console.log('Viewing employees.' + '\n');

    try {
        connection = await pool.getConnection();
        const [ rows, fields ] = await connection.execute('SELECT * FROM employees');
        console.table(rows);
    } catch (err) {
        console.error('\n\n' + 'Error connecting to database: ', err + '\n\n');
    } finally {
        if (connection) connection.release();
    }
    
    continueMenu();
};

async function viewRoles() {
    console.log('\n' + 'Viewing roles.' + '\n');

    try {
        connection = await pool.getConnection();
        const [ rows, fields ] = await connection.execute('SELECT * from roles');
        console.table(rows);
    } catch (err) {
        console.error('\n\n' + 'Error connecting to database: ', err + '\n\n');
    } finally {
        if (connection) connection.release();
    }

    continueMenu();
};

async function viewDepartments() {
    console.log('\n' + 'Viewing departments.' + '\n');

    try {
        connection = await pool.getConnection();
        const [ rows, fields ] = await connection.execute('SELECT * from departments');
        console.table(rows);
    } catch (err) {
        console.error('\n' + 'Error connecting to database: ', err + '\n');
    } finally {
        if (connection) connection.release();
    }
    
    continueMenu();
};

async function addNewDepartment() {
    try {
        const answer = await inquirer.prompt(addDepartment);
        const newDept = answer.name;

        connection = await pool.getConnection();
        await connection.execute(`INSERT INTO departments (department_name) VALUES ('${newDept}')`);

        console.log(`\n Added new department: ${newDept} \n`);
    } catch (err) {
        console.error('\n Error connecting to database: ', err + '\n');
    } finally {
        if (connection) connection.release();
    }

    continueMenu();
};

async function addNewRole() {
    try {
        connection = await pool.getConnection();
        const [rows] = await connection.execute('SELECT department_id, department_name FROM departments');
        // const [rows] = await connection.execute('SELECT CONCAT(department_name, " - ", department_id) as department FROM departments');
        const deptChoices = rows.map(row => row.department_id);
        // const deptChoices = rows.map(row => {
        //     return { department: row.department };
        // });
        // const deptChoices = rows.map(({ department_name, department_id }) => ({ department_name, department_id }));
            // console.log(deptChoices);                
        
        const answer = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the new role's title?",
            },
            {
                type: 'input',
                name: 'salary',
                message: "What is the new role's salary?"
            },
            {
                type: 'list',
                name: 'deptId',
                message: "What department is the role in?",
                choices: deptChoices
            },
        ]);

            const title = answer.name;
            const salary = answer.salary;
            const deptId = answer.deptId;

        await connection.execute(`INSERT INTO roles (title, salary, department_id) VALUES ('${title}', '${salary}', '${deptId}')`);

        console.log(`\n Added new role: ${title} \n`);
    } catch (err) {
        console.error('\n Error connecting to database: ', err + '\n');
    } finally {
        if (connection) connection.release();
    }

    continueMenu();
};

async function addNewEmployee() {
    try {
        connection = await pool.getConnection();
        const deptChoices = await connection.execute('SELECT department_name FROM departments');
            console.log(deptChoices);
        const mgrChoices = await connection.execute('SELECT ee_id FROM employees AS manager_id');
            console.log(mgrChoices);
    } catch (err) {
        console.error('\n Error connecting to database: ', err + '\n');
    }  finally {
        if (connection) connection.release();
    }

    continueMenu();
};

menu();
