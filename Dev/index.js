const inquirer = require('inquirer');
const { mainMenu, addDepartment, continuePrompt } = require('./utils/questions');
const connection = require('./connection/server');
const cTable = require('console.table');

//main menu
function menu() {
    inquirer.prompt(mainMenu).then((answer) => {
        if (answer.menu === 'viewDept') {
            console.log('Viewing departments.');
            viewDepartments();
        } else if (answer.menu === 'viewRole') {
            console.log('Viewing roles.');
            viewRoles();
        } else if (answer.menu === 'viewEmployee') {
            console.log('Viewing employees.');
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
            exitProgram();
        }
    });
};

function continueMenu() {
    inquirer.prompt(continuePrompt).then((action) => {
        if (action.continue === 'yes') {
            console.log('Returning to main menu.');
            console.clear();
            menu();
        } else {
            exitProgram();
        }
    });
};

function exitProgram() {
    console.clear();
    console.log('Goodbye!');
    //may want to do something with console tables before closing?
    connection.end((error) => {
        if (error) {
            console.clear();
            console.log('Error closing database connection: ' + error);
            return;
        }
        console.clear();
        console.log('Closed database connection. Now exiting program.');
    })

    process.exit();
};

async function getRoles() {
    const [roles] = await connection.query('SELECT * from roles');

    const roleChoices = roles.map((role) => ({
        name: role.title,
        value: role.id
    }));

    return roleChoices;
};

async function getDepts() {
    const [existingDepartments] = await connection.query('SELECT * from departments');

    const deptChoices = existingDepartments.map((department) => ({
        name: department.title,
        value: department.dept_name
    }));

    return deptChoices;
}

// async function updateExistingRole() {
//     getRoles();
//     getDepts();

//     try {
//     const {roleId} = await inquirer.prompt({
//         type: 'list',
//         name: 'roleId',
//         message: 'Which role would you like to update?',
//         choices: roleChoices
//     });

//     const [chosenRole] = await connection.query('SELECT * from roles WHERE id = ?', [roleId]);

//     const answer = await inquirer.prompt([
//         {
//             type: 'input',
//             name: 'title',
//             message: "What is the role's new title?",
//             default: chosenRole.title
//         },
//         {
//             type: 'number',
//             name: 'salary',
//             message: "What is the role's new salary?",
//             default: chosenRole.salary
//         },
//         {
//             type: 'list',
//             name: 'dept',
//             message: "What department is the role in?",
//             choices: deptChoices,
//             default: chosenRole.dept_name
//         }
//     ]);
//         await connection.execute(
//             'UPDATE roles SET title = ?, salary = ?, dept_name = ? WHERE id = ?', 
//             [answer.title, answer.salary, answer.dept]
//         );

//         console.log('Updated role.');

//     } catch (err) {
//         console.log('Error updating role: ' + err);
//     }

//     continueMenu();
// };

// async function addNewEmployee() {
//     getRoles();
//     getDepts();

//     try {
//         const answer = await inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'firstname',
//                 message: "What is the employee's first name?"
//             },
//             {
//                 type: 'input',
//                 name: 'lastname',
//                 message: "What is the employee's last name?"
//             },
//             {
//                 type: 'list',
//                 name: 'dept',
//                 message: 'What department is the employee in?',
//                 choices: deptChoices
//             },
//             {
//                 type: 'list',
//                 name: 'role',
//                 message: "What is the employee's role?",
//                 choices: roleChoices
//             },
//             {
//                 type: 'input',
//                 name: 'title',
//                 message: "What is the employee's title?"
//             },
//             // {
//             //     type: 'list',
//             //     name: 'manager',
//             //     message: "Who is the employee's manager?",
//             //     choices: managerChoices
//             // }
//         ]);

//         const [result] = await connection.execute(
//             'INSERT INTO employees (first_name, last_name, department_id, role_id, title) VALUES (?, ?, ?, ?, ?)',
//             [answer.firstname, answer.lastname, answer.department_id, answer.role_id, answer.title]
//         );
        
//         console.log('Added new employee!');

//         } catch (err) {
//             console.log('Error adding employee: ' + err);
//         }

//         continueMenu();
// };

// async function addNewRole() {
//     getDepts();

//     try {
//         const answer = await inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: "What is the new role's name (title)?"
//             },
//             {
//                 type: 'input',
//                 name: 'salary',
//                 message: 'Enter the salary for this role: '
//             },
//             {
//                 type: 'list',
//                 name: 'dept_name',
//                 message: 'Which department is this role in?',
//                 choices: deptChoices
//             },
//         ]);

//         const [result] = await connection.execute(
//             'INSERT INTO roles (title, salary, dept_name) VALUES (?, ?, ?)',
//             [answer.name, answer.salary, answer.department_name]
//         );

//         console.log('Added new role!');

//     } catch (err) {
//         console.log('Error adding new role: ' + err);
//     }

//     continueMenu();
// };

// async function addNewDepartment() {
//     try {
//         const answer = await inquirer.prompt(addDepartment);
//         const [result] = await connection.execute(
//             'INSERT INTO departments (department_name) VALUES (?)',
//             [answer.name]
//         );

//         console.log('Added new department!');
//     } catch (err) {
//         console.log('Error adding new department: ' + err);
//     }

//     continueMenu();
// };

async function viewEmployees() {
    const [data] = await connection.query('SELECT * from employees', (err, res) => {
        if(err) {
            console.log('Error querying the database: ', err);
            return;
        }
        console.clear();
        console.table(data);
    });

    continueMenu();
};

async function viewRoles() {
    const [data] = await connection.query('SELECT * from roles', (err, res) => {
        if(err) {
            console.log('Error querying the database: ', err);
            return;
        }
        console.clear();
        console.table(data);
    });

    continueMenu();
};

async function viewDepartments() {
    const [data] = await connection.query('SELECT * from departments', (err, res) => {
        if(err) {
            console.log('Error querying the database: ', err);
            return;
        }
        console.clear();
        console.table(data);
    });

    continueMenu();
};

menu();