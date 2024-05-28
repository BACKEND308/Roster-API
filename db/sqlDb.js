const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const sqlDb = mysql.createPool({
  host: process.env.SQL_DB_HOST || 'localhost',
  user: process.env.SQL_DB_USER || 'roster_user',
  password: process.env.SQL_DB_PASSWORD || 'your_password',
  database: process.env.SQL_DB_NAME || 'flight_roster',
});

module.exports = sqlDb;
