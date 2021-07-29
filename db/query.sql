USE company_db;

/* I am prompted to enter the name of the department and that department is added to the database */
INSERT INTO departments (department_name) VALUES ("Wiggles");

/* I am prompted to enter the name, salary, and department for the role and that role is added to the database */
INSERT INTO roles (title, salary, department_id)
VALUES ('Wiggler', 1738, 5);
-- ! INSER INTO THE DEPARTMENT ID THAT MATCHES DEPARTMENT NAME todo

/* I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database */
SELECT employees.id WHERE employee.id = manager_id
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('WiggleBottom', 'Wombo', 12, null);
-- ! LOOK FOR THE MANAGER WITH MATCHING STRING AND PUT ID AS THIS NEW ID

/* department names and department ids */
SELECT * FROM company_db.departments;

/* job title, role id, the department that role belongs to, and the salary for that role */
SELECT roles.id, roles.title, roles.salary, departments.department_name
FROM roles
INNER JOIN departments ON roles.department_id = departments.id;

/* including employee ids, first names, last names, job titles, departments, salary, and managers that the employees report to */
SELECT employees.id as employee_id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name, CONCAT(managers.first_name, " ", managers.last_name) AS manager_name
FROM roles
INNER JOIN employees ON roles.id = employees.role_id
LEFT JOIN departments ON roles.department_id = departments.id
LEFT JOIN employees managers ON employees.manager_id = managers.id;