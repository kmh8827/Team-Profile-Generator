fs = require('fs');

const Engineer = require('../Team-Profile-Generator/lib/Engineer');
const Intern = require('../Team-Profile-Generator/lib/Intern');
const Manager = require('../Team-Profile-Generator/lib/Manager');

var inquirer = require ('inquirer');

createPerson => {
inquirer
    .prompt([
        {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the name of the team manager'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Please enter the manager ID'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter the manager Email'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the manager office number'
        }
    ]).then (response => {
        const name = response.managerName;
        const id = response.managerId;
        const email = response.managerEmail;
        const num = response.officeNumber;

        const newMan = new Manager(name, id, email, num);
        // Creates a mangager card
    });
}

createPerson();