fs = require('fs');

const Engineer = require('../Team-Profile-Generator/lib/Engineer');
const Intern = require('../Team-Profile-Generator/lib/Intern');
const Manager = require('../Team-Profile-Generator/lib/Manager');

var { prompt } = require('inquirer');

prompt([
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
    const { managerName, managerId, managerEmail, officeNumber } = response;

    // Creates a mangager Ojbect
    const newMan = new Manager(managerName, managerId, managerEmail, officeNumber);

    const manager = `
    <!DOCTYPE html>
    <html lang="en-us">
    <head>
    <meta charset="UTF-8" />
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>

    <section>
        <div class="card border-success bg-light mb-3" style="max-width: 18rem; margin-left: 10px">
        <div class="card-header text-white bg-primary mb-3"><b><h3>${newMan.name}</h3></b><br /><b><h3>${newMan.getRole()}</h3></b></div>
            <div class="card-body text-black bg-white mb-3" style="padding: 10px; margin: 20px">
                <table class="table table-bordered">
                    <tr>
                        <td>
                            <p class="card-text tableBody">ID: ${newMan.getId()}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="card-text tableBody">E-Mail Address <a href="${newMan.getEmail()}" />${newMan.getEmail()}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="card-text tableBody">Office #: ${newMan.getOfficeNumber()}</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
    
    </body>
    </html>
    `

    let body = ``;
    const intern = [];
    const engineer = [];

    addMember();

    fs.writeFileSync('index.html', `
    ${manager}`, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('File Written Successfully');
    });
})

addMember = () => {

    prompt([
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

        // create IndexHTML with body

    });

}

addIntern = () => {
    prompt([
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
    ]).then(response => {

        const { name, id, email, school } = response;

        // Creates an Intern Object
        const intern = new Intern(name, id, email, school);

        // add into body Array
        addMember();
    });
}

addEngineer = () => {
    prompt([
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
    ]).then(response => {

        const { name, id, email, github } = response;

        // Creates an engineer Object
        let engineer = new Engineer(name, id, email, github);

        addMember();
    });


}