INSERT INTO department (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO roles (title, department_id, salary)
VALUES  ("Sales Lead", 1, 100000),
        ("Salesperson", 1, 80000),
        ("Lead Engineer", 2, 150000),
        ("Software Engineer", 2, 120000),
        ("Account Manager", 3, 160000),
        ("Accountant", 3, 125000),
        ("Legal Team Lead", 4, 250000),
        ("Lawyer", 4, 19000);

INSERT INTO employee (first_name, last_name, title, department_id, salary, manager_id)
VALUES  ("John", "Doe", 1, 1, 1, null),
        ("Mike", "Chan", 2, 1, 2, "John Doe"),
        ("Ashley", "Rodriguez", 3, 2, 3, null),
        ("Kevin", "Tupik", 4, 2, 4, "Ashley Rodriguez"),
        ("Kunal", "Singh", 5, 3, 5, null),
        ("Malia", "Brown", 6, 3, 6, "Kunal Singh"),
        ("Sarah", "Lourd", 7, 4, 7, null),
        ("Tom", "Allen", 8, 4, 8, "Sarah Lourd");
