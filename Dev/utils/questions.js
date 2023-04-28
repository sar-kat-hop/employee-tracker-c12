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
        // { name: 'Add employee', value: 'addEmployee'},
        // { name: 'Update role', value: 'updateRole'},
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

module.exports = { continuePrompt, addDepartment, mainMenu };