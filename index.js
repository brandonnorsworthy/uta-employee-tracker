const inquirer = require('inquirer');
const queries = require('./lib/queries.js')

const Questions = {
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

//!view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function init() {
    main();
}

function main() {
    inquirer.prompt([
    {
        type: 'list',
        message: 'Choose a table to interact with',
        name: 'choice',
        choices: Questions.main
    }
    ]).then((value) => {
        switch(value.choice){
            case Questions.main[0]:
                roles();
                break;
            case Questions.main[1]:
                roles();
                break;
            case Questions.main[2]:
                employees();
                break;
            case Questions.main[2]:
                process.abort();
                break;
            default:
                console.log("error in switch case index.js", value.name);
        }
    })
}

function departments() {
    console.log("showing departments")
    inquirer.prompt([
    {
        type: 'list',
        message: 'What to do involving the Department Table',
        name: 'choice',
        choices: Questions.departments
    }
    ]).then((value) => {
        switch(value.choice){
            case Questions.departments[0]:
                queries.selectEmployeesTable();
                break;
            case Questions.departments[1]:
                break;
            default:
                console.log("error in switch case departments index.js", value.name);
        }
        main();
    })
}

function roles() {
    inquirer.prompt([
    {
        type: 'list',
        message: 'What to do involving the Roles Table',
        name: 'choice',
        choices: Questions.roles
    }
    ]).then((value) => {
        switch(value.choice){
            case Questions.roles[0]:
                queries.selectRolesTable();
                break;
            case Questions.roles[1]:
                break;
            case Questions.roles[2]:
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
        choices: Questions.employees
    }
    ]).then((value) => {
        switch(value.choice){
            case Questions.employees[0]:
                queries.selectEmployeesTable();
                break;
            case Questions.employees[1]:
                break;
            default:
                console.log("error in switch case index.js", value.name);
        }
    })
}

init()