fs = require('fs');

const Engineer = require('../Team-Profile-Generator/lib/Engineer');
const Intern = require('../Team-Profile-Generator/lib/Intern');
const Manager = require('../Team-Profile-Generator/lib/Manager');

var inquirer = require('inquirer');

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

    ]).then(response => {
        const name = response.managerName;
        const id = response.managerId;
        const email = response.managerEmail;
        const num = response.officeNumber;

        // Creates a mangager card
        const newMan = new Manager(name, id, email, num);

        addMember();
    })

addMember = () => {

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'buildTeam',
                message: 'Would you like to add an engineer or intern',
                choices: [
                    { name: 'intern', value: 'intern' },
                    { name: 'engineer', vlaue: 'engineer' },
                    { name: 'none', value: 'none' }
                ]
            }
        ]).then(response => {
            let add = response.buildTeam;

            if (add === 'intern') {
                addIntern();
            }
            if (add === 'engineer') {
                addEngineer();
            }
        });
}

addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the Intern Name'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the Intern ID'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the Intern Email Address'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the Intern School'
            }
        ]).then(response =>  {

            const name = response.name;
            const id = response.id;
            const email = response.email;
            const school = response.school;

            // Creates an Intern Card
            const intern = new Intern(name, id, email, school);

            addMember();
        });
}

addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the Engineer Name'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the Engineer ID'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the Engineer Email Address'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter the Engineer Github Username'
            }
        ]).then (response => {

            const name = response.name;
            const id = response.id;
            const email = response.email;
            const github = response.github;

            // Creates an engineer Card
            let engineer = new Engineer(name, id, email, github);

            addMember();
        });


}