const inquirer = require('inquirer');
const queries = require('./lib/queries.js')

const questionsArray = [
    'all departments',
    'view all roles',
    'view all employees',
    'add a department',
    'add a role',
    'add an employee',
    'and update an employee role'
]


//!view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function init() {
    questions();
}

function questions() {
    inquirer.prompt([
    {
        type: 'list',
        message: 'Do somthin',
        name: 'role',
        choices: questionsArray
    }
    ]).then((value) => {
        console.log(value)
        switch(value.role){
            case questionsArray[0]:
                queries.selectDepartmentTable();
                break
            case questionsArray[1]:
                queries.selectRolesTable();
                break
            case questionsArray[2]:
                queries.selectEmployeesTable();
                break
            case questionsArray[3]:
                break
            case questionsArray[4]:
                break
            case questionsArray[5]:
                break
            case questionsArray[6]:
                break
            default:
                console.log("error in switch case index.js", value.name, questionsArray[0])
        }
        questions();
    })
}

init()