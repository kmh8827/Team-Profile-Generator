fs = require('fs');

const Engineer = require('../Team-Profile-Generator/lib/Engineer');
const Intern = require('../Team-Profile-Generator/lib/Intern');
const Manager = require('../Team-Profile-Generator/lib/Manager');

var { prompt } = require('inquirer');

let interns = ``;
let engineers = ``;
let manager = ``;

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

    createManCard(newMan);

    addMember();
  
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
        if (add === 'none') {
            makePage();
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
        const newInt = new Intern(name, id, email, school);
        createIntCard(newInt);
    
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
        let newEng = new Engineer(name, id, email, github);
        createEngCard(newEng)

        addMember();
    });


}

createManCard = (newMan) => {
    const card =  `
   
        <div class="card border-success bg-light mb-3" style="max-width: 18rem; margin-left: 10px; margin-top: 10px;">
        <div class="card-header text-white bg-primary mb-3"><b><h3>${newMan.getName()}</h3></b><br /><b><h3>${newMan.getRole()}</h3></b></div>
            <div class="card-body text-black bg-white mb-3" style="padding: 10px; margin: 20px">
                <table class="table table-bordered">
                    <tr>
                        <td>
                            <p class="card-text tableBody">ID: ${newMan.getId()}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="card-text tableBody">E-Mail Address <a href="mailto:${newMan.getEmail()}" />${newMan.getEmail()}</p>
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

    `

    manager += card;

}

createIntCard = (newInt) => {
    const card = `
    <div class="card border-success bg-light mb-3" style="max-width: 18rem; margin-left: 10px">
    <div class="card-header text-white bg-primary mb-3"><b><h3>${newInt.getName()}</h3></b><br /><b><h3>${newInt.getRole()}</h3></b></div>
        <div class="card-body text-black bg-white mb-3" style="padding: 10px; margin: 20px">
            <table class="table table-bordered">
                <tr>
                    <td>
                        <p class="card-text tableBody">ID: ${newInt.getId()}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="card-text tableBody">E-Mail Address <a href="mailto:${newInt.getEmail()}" />${newInt.getEmail()}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="card-text tableBody">School: ${newInt.getSchool()}</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    `

    interns += card;
}

createEngCard = (newEng) => {
    const card = `
    <div class="card border-success bg-light mb-3" style="max-width: 18rem; margin-left: 10px">
    <div class="card-header text-white bg-primary mb-3"><b><h3>${newEng.getName()}</h3></b><br /><b><h3>${newEng.getRole()}</h3></b></div>
        <div class="card-body text-black bg-white mb-3" style="padding: 10px; margin: 20px">
            <table class="table table-bordered">
                <tr>
                    <td>
                        <p class="card-text tableBody">ID: ${newEng.getId()}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="card-text tableBody">E-Mail Address <a href="mailto:${newEng.getEmail()}" />${newEng.getEmail()}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="card-text tableBody">Github Profile: <a href="https://github.com/${newEng.getGithub()}" />${newEng.getGithub()}</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    `

    engineers += card;
}

makePage = () => {
    fs.writeFileSync('index.html', `
    <!DOCTYPE html>
    <html lang="en-us">
    <head>
    <meta charset="UTF-8" />
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../Team-Profile-Generator/dist/style.css">
    </head>
    <body>
    <header>
        <h1>My Team</h1>
    </header>
    <section>
    ${manager} ${interns} ${engineers}
    </section>
    </body>
    </html>`, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('File Written Successfully');
    });
}