// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];

const createReadme = response => ` 
# ${response.title}
----------------------
## Description
    ${response.description}

## Table of Contents
   - [Installation](#installation)
   - Usage
   - License
   - Contributing
   - Tests
    - Questons

## Installation <a name = "installation"/>
    To install necessary dependencies, run the following command
        nmp i

## Usgage
  ${response.usage}

## License
  ${response.license}

## Contributing
  ${response.contributors}

## Tests
  ${response.test}

## Questions
If you have any questions, please contme at <joshwalters34@gmail.com>.  You can see more of my work at [joshwalters34](https://github.com/joshwalters34/README-Generator).
    `

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of this README?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions for this site',
      name: 'instructions',
    },
    {
        type: 'input',
        message: 'What is the usage information for this site?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who are the contributors to this site?',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'What instructions are needed to test this site?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'What type of license will be used for this stie?',
        name: 'licence',
        choices: ['MIT', 'Mozilla', 'Apache', 'Eclipse']
    }
  ])
  .then (response => {
    fs.writeFile('README.md', createReadme(response)
    , (err) => 
    err ? console.log(err) : console.log("README generated")
    )
  })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
