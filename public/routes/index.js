const router = require("express").Router();
const Routes = require("./routes");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt( [
    {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: 
        [
            "View all Departments", "View All Roles", "View All Employees"
        ],
    },
])
    // .then((choice) => {
    //     console.log("Now viewing ", choice.name);
    // });



