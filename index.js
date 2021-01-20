const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'username',
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is your project's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "Please write a short description of your project?",
            name: 'description',
        },
        {
            type: 'list',
            message: "What kind of license does your project use?",
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            message: "What command should be run to install dependencies?",
            name: 'dependencies',
        },
        {
            type: 'input',
            message: "What command should be run to run tests?",
            name: 'tests',
        },
        {
            type: 'input',
            message: "What does the user need to know about using the repo?",
            name: 'repo',
        },
        {
            type: 'input',
            message: "What does the user need to know about contributing to the repo?",
            name: 'contributing',
        }
    ])