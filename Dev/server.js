const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
// const fs = require('fs');
const { exit } = require('process'); //native to node?
// const indexJS = require('./index');
// require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost', 
      user: 'root', 
      password: '', //no password set
      database: 'employeeRoster_db' 
    },
    console.log(`Connected to the employeeRoster_db database.`)
  );
  
//code below not working :(
  //make it simpler to run seed
  // const seedQuery = fs.readFileSync('./db/seeds.sql', {
  //   encoding: 'utf-8',
  // });

  //db queries
  db.query('SELECT * FROM employee_list', function (err, results) {
    console.log(results);
  });
  
  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

// Inquirer prompts
  function showMenu() {
    inquirer.prompt([{
      type: 'list',
      name: 'menu',
      message: 'Welcome to the Employee Tracker. What would you like to do?',
      choices:
        [
          "View all Employees",
          "View all Departments",
          "View all Roles",
          "Exit"
        ]
    }])
      .then(response => {
        if(response.choice == "View all Employees") {
          viewEEs();
        } else if (response.choice == "View all Departments") {
          viewDepts();
        } else if (response.choice == "View all Roles") {
          viewRoles();
        } else {
          process.exit(); // possibly not needed -- exit/quit choice may work without this
          // showMenu();
        }
      })
  };

// Menu selections
  // View department_list
  function viewDepts() {
    db.query(
      'SELECT id AS "Department ID", name AS "Department" FROM department_list', 
      (err, res) => {
        if(err) {
          console.log('Error! ' + err);
        } else {
          console.log('Department Info: ' + res);
          showMenu();
        }
      });
  };

  // View role_list
  function viewRoles() {
    db.query(
      'SELECT id AS "Role ID", title AS "Job Title", salary AS "Role Salary", dept_name AS "Department" FROM role_list INNER JOIN department_list ON role_list.dept_name = department_list.name',
      (err, res) => {
        if(err) {
          console.log('Error! ' + err);
        } else {
          console.log('Job Roles Info: ' + res);
          showMenu();
        }
      });
  };

  // View employee_list
  function viewEEs() {
    db.query(
      'SELECT id AS "Employee ID", first_name AS "First Name", last_name AS "Last Name", title as "Job Title", dept_name AS "Dept. Name", FROM employee_list INNER JOIN department_list ON employee_list.dept_name = department_list.name', 
      (err, res) => {
        if(err) {
          console.log('Error! ' + err);
          return;
        } else {
          console.log('Employee Info:' + res);
          showMenu();
        }
      });
  };
