const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "uniqlo"
})

connection.connect((error) => {
    if(error) throw error
    console.log("Connected to the database port 3306")
})

module.exports = connection