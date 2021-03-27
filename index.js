
const inquirer = require('inquirer');
const fs = require('fs');


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
If you have any questions, please contact me at <${response.email}>.  You can see more of my work at [${response.git}](https://github.com/${response.git}){target="_blank"}.
    `

function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of this README?',
      name: 'title',
      validate: validatePrompts,
    },
    {
      type: 'input',
      message: 'Describe your project.',
      name: 'description',
      validate: validatePrompts,
    },
    {
      type: 'input',
      message: 'What are the installation instructions for this project?',
      name: 'instructions',
      validate: validatePrompts,
    },
    {
        type: 'input',
        message: 'What is the usage information for this project?',
        name: 'usage',
        validate: validatePrompts,
    },
    {
        type: 'input',
        message: 'Who are the contributors to this projects?',
        name: 'contributors',
        validate: validatePrompts,
    },
    {
        type: 'input',
        message: 'What instructions are needed to test this project?',
        name: 'test',
        validate: validatePrompts,
    },
    {
        type: 'list',
        message: 'What type of license will be used for this project?',
        name: 'license',
        choices: ['MIT', 'Mozilla', 'Apache', 'Eclipse'],
        validate: validatePrompts,
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
      validate: validatePrompts,
  },
  {
    type: 'input',
    message: 'What is your GitHub id?',
    name: 'git',
    validate: validatePrompts,
},
  ])
  .then (response => {
    fs.writeFile('README.md', createReadme(response)
    , (err) =>
    err ? console.log(err) : console.log("README generated")
    )
  })
}

function validatePrompts(input) {
    if (input.length === 0) {
      return "Please enter a value for this prompt";
    } else {
      return true
    }
  }                                   
// // Function call to initialize app
init();
