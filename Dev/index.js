// const express = require('express');
// const inquirer = require('inquirer');
// const fs = require('fs');

// const seedQuery = fs.readFileSync('./db/seeds.sql', {
//     encoding: 'utf-8',
//   });  

// const Menu = () => {
//     inquirer
//         .prompt([{
//             type: 'list',
//             name: 'Menu',
//             message: 'Welcome to the Employee Database. What would you like to do?',
//             choices: ['View all employees', 'View all departments', 'View all roles', 'Exit']
//         }]).then(menu => {
//             let currentMenu = Object.keys(menu)[0];
//             switch (menu.menu) {
//                 case 'Employee List':
//                     employeeMenu.employeeListPrompt(currentMenu);
//                     break;
//                 case 'Department List':
//                     deptMenu.departmentListPrompt(currentMenu);
//                     break;
//                 case 'Exit':
//                     menu.menu();
//                     break;
//             }
//             });
//         };

// module.exports.menu = Menu;

// inquirer.prompt( [
//     {
//         type: "list",
//         name: "menu",
//         message: "What would you like to do?",
//         choices: 
//         [
//             "View all Departments", "View All Roles", "View All Employees"
//         ],
//     },
// ]).then((choice) => {
//     console.log(`Now viewing `, choice.name);
// });