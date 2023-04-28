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
        const [rows, fields] = await connection.execute('SELECT CONCAT(department_id, ": ", department_name) AS department FROM departments');

        const deptChoices = rows.map(row => row.department);
        
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
            const dept = answer.deptId;
            const deptId = dept.split(/:\s/)[0];
                console.log('Dept. ID:' + deptId);

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
        const [rows] = await connection.execute('SELECT ee_id FROM employees AS manager_id');
        const [data, fields] = await connection.execute('SELECT CONCAT(ee_id, ": ", first_name, " ", last_name) AS ee_info FROM employees');

        // const mgrChoices =  rows.map(row => row.ee_id);
            // console.log('Manager IDs: ' + mgrChoices);
        const eeNames = data.map(data => data.ee_info);
            // console.log('Employee names: ' + eeNames);
        
        const answer = await inquirer.prompt([
            {
                type: 'input',
                name: 'firstname',
                message: "What is the employee's first name?"
            },
            {
                type: 'input',
                name: 'lastname',
                message: "What is the employee's last name?"
            },
            {
                type: 'list',
                name: 'mgrId',
                message: "Who is the employee's manager?",
                // description: [eeNames],
                choices: eeNames
            },
        ]);

        const firstname = answer.firstname;
        const lastname = answer.lastname;
        const mgr = answer.mgrId;
        const splitArray = mgr.split(/:\s/);
        const mgrId = splitArray[0];
            // console.log(splitArray);
            console.log('Manager ID:' + mgrId);

        await connection.execute(`INSERT INTO employees (first_name, last_name, manager_id) VALUES ('${firstname}', '${lastname}', '${mgrId}')`);

        console.log(`\n Added new employee: ${firstname} ${lastname} \n`);

    } catch (err) {
        console.error('\n Error connecting to database: ', err + '\n');
    }  finally {
        if (connection) connection.release();
    }

    continueMenu();
};

menu();
<<<<<<< Updated upstream
=======

<<<<<<< Updated upstream
// start();
=======
// future TODO:
// add more functionality:
// - update ee managers (or ees in general), view ees by manager, view ees by dept, delete depts/roles/ees, view sum of salaries per dept
>>>>>>> Stashed changes
>>>>>>> Stashed changes
