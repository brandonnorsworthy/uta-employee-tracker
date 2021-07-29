USE company_db;

/* department names and department ids */
SELECT * FROM company_db.departments;

/* job title, role id, the department that role belongs to, and the salary for that role */
SELECT roles.id, roles.title, roles.salary, departments.department_name
FROM roles
INNER JOIN departments ON roles.department_id = departments.id;

/* including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to */
SELECT employees.id as employee_id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name, CONCAT(managers.first_name, " ", managers.last_name) AS manager_name
FROM roles
INNER JOIN employees ON roles.id = employees.role_id
LEFT JOIN departments ON roles.department_id = departments.id
LEFT JOIN employees managers ON employees.manager_id = managers.id;