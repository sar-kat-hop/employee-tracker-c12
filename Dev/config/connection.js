const mysql = require('mysql2/promise');

// const PORT = process.env.PORT || 3001;

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'company_db'
// });

// connection.connect((err) => {
//   if (err) {
//     console.log('Error connecting to MySQL database: ', err)
//   } else {
//     console.log(`Connected to MySQL database at ${PORT}.`);
//   }
// });

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'company_db',
  waitForConnection: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function getConnection() {
  try {
    const connection = await pool.getConnection();
    return connection;

  } catch (error) {
    console.log('Error connecting to database: ', error);
    throw error;
  }
};

module.exports = getConnection();