// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];


const createReadme = response => ` 
# ${response.title}

![APM](https://img.shields.io/badge/licence-${response.license}-blue)
## Description
  ${response.description} 

## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Contributions](#contributions)
   - [Tests](#tests)
   - [Questons](#questions)

## Installation 
  What command is needed to install necessary dependencies?

      ${response.instructions}

## Usage
  ${response.usage}

## License
  The project is licensed under the ${response.license} license

## Contributions
  ${response.contributors}

## Tests
  In order to use this generator, users need to ${response.test}

## Questions
If you have any questions, please contact me at <${response.email}>.  You can see more of my work at [${response.git}](https://github.com/${response.git}).
    `

 inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of this README?',
      name: 'title',
      // validate: validatePrompts,
      // (input) {
      //   if (input.length === 0) {
      //     return "Please enter a title for this README";
      //   } else {
      //     return
      //   }
      // }
    },
    {
      type: 'input',
      message: 'Describe your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions for this project?',
      name: 'instructions',
    },
    {
        type: 'input',
        message: 'What is the usage information for this project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who are the contributors to this projects?',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'What instructions are needed to test this project?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'What type of license will be used for this project?',
        name: 'license',
        choices: ['MIT', 'Mozilla', 'Apache', 'Eclipse']
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email'
  },
  {
    type: 'input',
    message: 'What is your GitHub id?',
    name: 'git'
},
  ])
  .then (response => {
    fs.writeFile('README.md', createReadme(response)
    , (err) =>
    //  => {
    //   if(response === null) {
    //     console.log("Please provide an input to each prompt")
    //   } else console.log("README generated")
    // }
    err ? console.log(err) : console.log("README generated")
    )
  })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  // inquirer();
}

// function validatePrompts(input) {
//   setTimeout(function() {
//   if (input.length === 0) {
//     done("Please enter a title for this README");
//     return;
//   } 
//   done(true);
// }, 3000)
// }
// // Function call to initialize app
init();
