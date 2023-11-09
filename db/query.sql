SELECT *
FROM roles
JOIN department ON roles.department_id = department.id;

SELECT * 
FROM employee 
JOIN department ON employee.department_id = department.id;

SELECT * 
FROM employee 
JOIN roles ON employee.title = roles.id; 

SELECT * 
FROM employee 
JOIN roles ON employee.salary = roles.id;





