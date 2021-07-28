INSERT INTO department (name)
VALUES ("Accounting"),
       ("Sales"),
       ("Information Technology"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES  ("Accounting Manager", 130000.00, 1),
        ("Accountant", 97500.00, 1),
        ("Assistant Controller", 73125.80, 1),

        ("Sales Manager", 123398.43, 2),
        ("Sales Specialist ", 92548.82, 2),

        ("Systems Engineering Manager", 131040, 3),
        ("Hardware Technician", 117936.50, 3),
        ("Help Desk Analyst ", 85975.34, 3),
        ("Network Administrator", 117936.50, 3),

        ("Human Resources Managers ", 103170.41, 4),
        ("Human Resources Specialists ", 92853.37, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "Miller", 1, 1),
       ("Ruben", "Stillwell", 2, 1),
       ("Bobby", "Hernandez", 2, 1),
       ("William", "Jones", 3, 1),

       ("Mary", "Schroeder", 4, 4),
       ("Carl", "Booth", 5, 4),
       ("Hillary", "Spillers", 5, 4),

       ("Jesus", "Ellis", 6, 7),
       ("Jeff", "Corder", 7, 7),
       ("James", "Bahe", 8, 7),
       ("Carol", "Macdonald", 8, 7),
       ("Harry", "Warren", 9, 7),

       ("Alejandro", "Bryner", 10, 12),
       ("Martin", "Tucker", 11, 12),
       ("Francisca", "Updike", 11, 12);