const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => 
    inquirer.prompt([
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
        },
    ]);

const generateREADME = (data) =>
`# ${data.name}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

${'```'}
${data.dependencies}
${'```'}

## Usage

${data.repo}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

${'```'}
${data.tests}
${'```'}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You
can find more of my work at [${data.username}](https://github.com/${data.username}).`;

promptUser()
    .then((answers) => writeFileAsync('goodREADME.md', generateREADME(answers)))
    .then(() => console.log('Generating README'))
    .catch((err) => console.error(err));