import mysql from 'mysql2'

const db = mysql.createConnection({ 
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
})
export default db
