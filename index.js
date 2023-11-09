// npm install of inquirer and mysql2 (in config) required
const inquirer = require("inquirer");
const con = require("./config/connection.js");

// options that will appear when prompted
const questions = [
    {
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", 
        "Add Role", "View All Departments", "Add Department", "Quit"],
        name: "options"
    },
];

// inquirer to prompt questions and get data from database
inquirer
    .prompt(questions)
    .then(function (choice) {

        if (choice.options === "View All Employees") {
            con.query("SELECT * FROM employee JOIN department ON employee.department_id = department.id;", function (err, result) {
                if (err) throw err;
                console.log(result);
            });

        } else if (choice.options === "Add Employee") {
            con.query("SELECT * FROM roles", function (err, result) {
                if (err) throw err;
                let roles = result.map(roles => ({ name: roles.title, value: roles.roles_id }));
                let employee = result.map(employee => ({ name: employee.first_name + " " + employee.last_name, value: employee.manager_id }));
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is the employee's first name?",
                        name: "firstName"
                    },
                    {
                        type: "input",
                        message: "What is the employee's last name?",
                        name: "lastName"
                    },
                    {
                        type: "list",
                        message: "What is the employee's role?",
                        choices: "roles",
                        name: "roles"
                    },
                    {
                        type: "list",
                        message: "Who is the employee's manager",
                        choices: employee,
                        name: "manager"
                    }
                ]).then((response) => {
                    con.query("INSERT INTO role SET ?",
                    {
                        first_name: response.firstName,
                        last_name: response.lastName,
                        roles_id: response.roles,
                        manager_id: response.manager,
                    },
                    function (err, result) {
                        if (err) throw err;
                        console.log("Employee added successfully!");
                    })
                })
            })
            
        } else if (choice.options === "View All Roles") {
            con.query("SELECT * FROM roles JOIN department ON roles.department_id = department.id;", function (err, result) {
                if (err) throw err;
                console.log(result);
            });

        } else if (choice.options === "Add Role") {
            con.query("SELECT * FROM department", function (err, result) {
                if (err) throw err;
                let department = result.map(department => ({ name: department.name, value: department.department_id }));
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What role do you want to add?",
                        name: "title"
                    },
                    {
                        type: "input",
                        message: "What is the salary amount?",
                        name: "salary"
                    },
                    {
                        type: "list",
                        message: "What department do you want to add this role to?",
                        choices: department,
                        name: "departmentName"
                    },
                ]).then((response) => {
                    con.query("INSERT INTO roles SET ?",
                    {
                            title: response.title,
                            salary: response.salary,
                            department_id: response.departmentName
                    },
                    function (err, result) {
                            if (err) throw err;
                            console.log("Role successfully added!");
                    })
                })
            });

        } else if (choice.options === "View All Departments") {
        con.query("SELECT * FROM department", function (err, result) {
                if (err) throw err;
                console.log(result);
            });
        
        } else if (choice.options === "Add Department") {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What department would you like to add?",
                        name: "newDepartment"
                    }
                ])
                .then((response) => {
                    con.query("INSERT INTO department SET ?", 
                    {
                        name: response.newDepartment,
                    },
                    function (err, result) {
                        if (err) throw err;
                        console.log("Department added successfully!");
                    })
            });

        } else if (choice.options === "Quit") {
            console.log("Goodbye");
        }
    });