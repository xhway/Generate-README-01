const inquirer = require('inquirer');

const fs = require('fs');

// TODO: Include packages needed for this application
const generatePage = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type:'input',
        name: 'github',
        message:'Insert GitHub username.',
        validate: nameInput => {
            if (nameInput){
                return true;
            }else{
                console.log('Enter your GitHub username!');
                return false;
            }
        }

    },
    {
        type:'input',
        name: 'email',
        message:'Insert your Email address.',
        validate: nameInput => {
            if (nameInput){
                return true;
            }else{
                console.log('Enter your email address!');
                return false;
            }
        }
        
},
{
    type:'input',
    name: 'title',
    message:'What is the name of your project?',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else{
            console.log('Enter your project name!');
            return false;
        }
    }
},
{
    type:'input',
    name: 'description',
    message:'Write a short description of your project.',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else{
            console.log('Enter description of your project');
            return false;
        }
    }
},
{
    type:'list',
    name: 'license',
    message:'What kind of license does your project have?',
    choices: ['None','Apache','GNU','MIT'],
    default:["None"],
    validate: nameInput => {
        if (nameInput){
            return true;
        }else{
            console.log('Choose a license');
            return false;
        }
    }
},
{
    type:'input',
    name: 'install',
    message:'Enter steps required to install your project.',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else{
            console.log('Enter steps to install your project.');
            return false;
        }
    }
},
{
    type:'input',
    name: 'usage',
    message:'How do you use this app?',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else{
            console.log('Enter usage details');
            return false;
        }
    }
},
{
    type:'input',
    name: 'test',
    message:'What command is used to run this project?',
    default:'node index'
},
{
    type:'input',
    name: 'contributors',
    message:'How to contribute to the project',
   default:'Send email located in the repo for more information.'
}
    ]);
};

// TODO: Create a function to write README file
const writeFile = data => {
     fs.writeFile('README.md', data, err =>  {
    if (err){
        console.log(err);
        return;
    }else {
        console.log("Your new README is good to go!")
    }
})
};
// TODO: Create a function to initialize app
questions()

.then(answers => {
    return generatePage(answers);
})
.then(data =>{
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})




