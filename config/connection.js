const mysql2 = require("mysql2");

var con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "panda",
    database: "employee_db"
});

module.exports = con;