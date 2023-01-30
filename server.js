const express = require("express");
const inquirer = require("inquirer");
const hide = require("hide-secrets");
const mysql = require("mysql2");
const routes = require("./public/routes")
// const sequelize = require("./public/config/connection");

// const Employee = require("./public/models/Employee");

const PORT = 3001;
// const PORT = process.env.PORT || 3001;
const app = express();

app.use(routes);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       user: 'root',
//       password: '',
//       database: 'employees_db'
//     },
//     console.log(`Connected to the employees_db database.`)
//   );

  // db.query('SELECT * FROM employees', function (err, results) {
  //   console.log(results);
  // });
  

app.use((req, res) => {
  res.status(404).end();
  });
  
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

  // app.listen(PORT, () => {
  //   console.log(`Server running on port ${PORT}`);
  // });