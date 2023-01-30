const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');
const indexJS = require('./index');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );
  
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
  