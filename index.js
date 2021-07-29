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
    questions();
}

function questions() {
    inquirer.prompt([
    {
        type: 'list',
        message: 'Do somthin',
        name: 'choice',
        choices: Questions.main
    }
    ]).then((value) => {
        console.log(value)
        switch(value.choice){
            case Questions.main[0]:
                queries.selectDepartmentTable();
                break
            case Questions.main[1]:
                queries.selectRolesTable();
                break
            case Questions.main[2]:
                queries.selectEmployeesTable();
                break
            case Questions.main[3]:
                //! function to get information about these inserts
                queries.addEmployeesTable();
                break
            case Questions.main[4]:
                //! function to get information about these inserts
                queries.addRolesTable();
                break
            case Questions.main[5]:
                //! function to get information about these inserts
                queries.updateEmployeesTable();
                break
            default:
                console.log("error in switch case index.js", value.name);
        }
        if(value.choice != 'Quit'){
            console.clear();
            questions();
        }
        process.abort();
    })
}

init()