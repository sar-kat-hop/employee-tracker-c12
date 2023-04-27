const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employeeRoster'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL database: ', err)
  } else {
    console.log(`Connected to MySQL database at ${PORT}.`);
  }
});

module.exports = connection;