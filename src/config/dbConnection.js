const mysql = require('mysql2/promise')

const {
  DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE
} = process.env

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_DATABASE,
  password: DB_PASS,
  port: +DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0

})

module.exports = pool
