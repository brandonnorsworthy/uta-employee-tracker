const inquirer = require('inquirer');
const queries = require('./lib/queries.js')

//!view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

const QuestionPrompts = {
    main: 'Choose a table to interact with',
    departments: [
        'What to do involving the Department Table',
        'Enter the name of the new Department',
    ],
    roles: [
        'view roles',
    ],
    employees: [
        'view employees',
    ]
}

const ListChoices = {
    main: [
        'all departments',
        'view all roles',
        'view all employees',
        'Quit',
    ],
    departments: [
        'view departments',
        'add a department',
    ],
    roles: [
        'view roles',
        'add a role',
        'update a role',
    ],
    employees: [
        'view employees',
        'add an employees',
    ]
}

function init() {
    main();
}

function main() {
    console.log('\n\n')
    inquirer.prompt([
    {
        type: 'list',
        message: QuestionPrompts.main,
        name: 'choice',
        choices: ListChoices.main
    }
    ]).then((value) => {
        switch(value.choice){
            case ListChoices.main[0]:
                departments();
                break;
            case ListChoices.main[1]:
                roles();
                break;
            case ListChoices.main[2]:
                employees();
                break;
            case ListChoices.main[2]:
                process.abort();
                break;
            default:
                console.log("error in switch case index.js", value.name);
        }
    })
}

function departments() {
    inquirer.prompt([
    {
        type: 'list',
        message: QuestionPrompts.departments[0],
        name: 'choice',
        choices: ListChoices.departments
    }
    ]).then((value) => {
        switch(value.choice){
            case ListChoices.departments[0]:
                queries.selectDepartmentTable();
                main();
                break;
            case ListChoices.departments[1]:
                departmentAdd();
                break;
            default:
                console.log("error in switch case departments index.js", value.name);
        }
    })
}

/* add a department */
function departmentAdd() {
    inquirer.prompt({
        type: 'input',
        message: QuestionPrompts.departments[1],
        name: 'choice',
    }).then((value) => {
        queries.insertDepartmentsTable(value.choice);
        main();
    })
}

function roles() {
    inquirer.prompt([
    {
        type: 'list',
        message: 'What to do involving the Roles Table',
        name: 'choice',
        choices: ListChoices.roles
    }
    ]).then((value) => {
        switch(value.choice){
            case ListChoices.roles[0]:
                queries.selectRolesTable();
                break;
            case ListChoices.roles[1]:
                break;
            case ListChoices.roles[2]:
                break;
            default:
                console.log("error in switch case index.js", value.name);
        }
    })
}

function employees() {
    inquirer.prompt([
    {
        type: 'list',
        message: 'What to do involving the Employees Table',
        name: 'choice',
        choices: ListChoices.employees
    }
    ]).then((value) => {
        switch(value.choice){
            case ListChoices.employees[0]:
                queries.selectEmployeesTable();
                break;
            case ListChoices.employees[1]:
                break;
            default:
                console.log("error in switch case index.js", value.name);
        }
    })
}

init()