const mainMenu = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [
        { name: 'View departments', value: 'viewDept' },
        { name: 'View roles', value: 'viewRole' },
        { name: 'View employees', value: 'viewEmployee' },
        { name: 'Add department', value: 'addDept'},
        { name: 'Add role', value: 'addRole'},
        { name: 'Add employee', value: 'addEmployee'},
        { name: 'Update role', value: 'updateRole'},
        { name: 'Quit', value: 'quit'},
        ],
    }
];

const addDepartment= [
    {
        type: 'input',
        name: 'name',
        message: "What is the new department's name?"
    },
];

// const addRole = [
//     {
//         type: 'input',
//         name: 'name',
//         message: "What is the new role's name (title)?"
//     },
//     {
//         type: 'input',
//         name: 'salary',
//         message: 'Enter the salary for this role: '
//     },
//     {
//         type: 'list',
//         name: 'dept_name',
//         message: 'Which department is this role in?',
//         choices: [
//             {}
//         ]
//     }
// ];

// const addEmployee = [
//     {
//         type: 'input',
//         name: 'firstname',
//         message: "Enter the employee's first name: "
//     },
//     {
//         type: 'input',
//         name: 'lastname',
//         message: "Enter the employee's last name: "
//     },
//     {
//         type: 'input',
//         name: 'title',
//         message: "Enter the employee's title: "
//     }
// ];

// const updateRole = [
//     {
//         type: 'input',
//         name: 'newTitle',
//         message: 'What would you like the title to be updated to?'
//     },
//     {
//         type: 'input',
//         name: 'newSalary',
//         message: 'What would you like to update the salary to?'
//     },
//     {
//         type: 'list',
//         name: 'newDeptName',
//         choices: 
//     }
// ];

const continuePrompt = [
    {
        type: 'list',
        name: 'continue',
        message: 'Would you like to return to the main menu?',
        choices: [
            { name: 'Yes', value: 'yes'},
            { name: 'No', value: 'no'},
        ],
    }
];

module.exports = { continuePrompt, addEmployee, addRole, addDepartment, mainMenu };