# Professional README Generator

## Project:

This project is an application that dynamically generates an ideal GitHub README file. The user runs Node.js in terminal/GitBash and encounters a series of prompts that then takes the user's answers and populates a README template to create the new file.

<br>

![Image](https://github.com/RyanKirkland86/professional_README_generator/blob/main/Assets/Terminal%20Screenshot.jpg)

## Technologies Used:
- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [JSON](https://www.json.org/json-en.html)
- [Inquirer.js](https://www.npmjs.com/package/inquirer)
- [Visual Studio Code](https://code.visualstudio.com/)

## Installation

To install the necessary dependencies, open Terminal/GitBash and enter this code in the command line:

```
npm install inquirer
```

## Process:

After installing the neccessary packages, run this code in the command line:

```
node index.js
```
<br>
The user will then face a series of prompts asking question to populate the README. Here is a sample of that code:

```javascript
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
```

<br>

Once the user has entered their answers, the application will dynamically generate an ideal README file populated with the user's answers. Here's an example of that code:

```javascript
promptUser()
    .then((answers) => writeFileAsync('sampleGoodREADME.md', generateREADME(answers)))
    .then(() => console.log('Generating README'))
    .catch((err) => console.error(err));
```

## Authors:
- Ryan Kirkland
- [GitHub](https://github.com/RyanKirkland86)
- [LinkedIn](https://www.linkedin.com/in/ryan-kirkland-619942200/)
- [Contributors](https://bootcamp.berkeley.edu/coding/)

## License:
This project is licensed under the MIT License.

## Acknowledgements:
Thank you to UCB Extension for the help with this project.