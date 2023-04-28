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
            // console.log('Viewing departments.');
            viewDepartments();

        } else if (answer.menu === 'viewRole') {
            // console.log('Viewing roles.');
            viewRoles();

        } else if (answer.menu === 'viewEmployee') {
            // console.log('Viewing employees.');
            viewEmployees();

        // } else if (answer.menu === 'addDept') {
        //     console.log('Adding new department.');
        //     addNewDepartment();
        // } else if (answer.menu === 'addRole') {
        //     console.log('Adding new role.');
        //     addNewRole();
        // } else if (answer.menu === 'addEmployee') {
        //     console.log('Adding new employee.');
        //     addNewEmployee();
        // } else if (answer.menu === 'updateRole') {
        //     console.log('Updating existing role.');
        //     updateExistingRole();
        } else if (answer.menu === 'quit') {
            console.log('Now closing. Bye!');
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

// async function exitProgram() {
//     if(connection) {
//         connection.release();
//     }

//     console.log('Closing program.');
//     process.exit();
// };

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
    
    // console.log('');
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

menu();

// start();