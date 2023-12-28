// initiates npm inquirer 
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository


// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// Getting Started
// Here are some guidelines to help you get started:

// Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

// Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.

// Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

// Refer to the Fullstack Blog Video Submission Guide for additional guidance on creating a video.

// Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.
// default method to initiate inquirer
const inquirer = require("inquirer")
// different method to initiate inquirer = import inquirer from 'inquirer';
const fs = require('fs')
const readmeprompt = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your readme file:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions for installation:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe user usage:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter your credits:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please enter your License:'
    },
    {
        type: 'input',
        name: 'features',
        message: 'Please describe project features:'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please enter your contributions:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please include your tests:'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter the questions:'
    },
]

inquirer
    /* Pass your questions in here */
    .prompt(readmeprompt)

    // Use user feedback for... whatever!!
    .then((answers) => {
        console.log(answers)
        const readmeskelaton = `# <Your-Project-Title>
${answers.title}!
## Description
${answers.description}!
## Table of Contents (Optional)
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
${answers.installation}!
## Usage
${answers.usage}!
## Credits
${answers.credits}!
## License
${answers.license}!
## Features
${answers.features}!
## How to Contribute
${answers.contributions}!
## Tests
${answers.tests}!
## Questions
${answers.questions}!`

        fs.writeFile('generatedREAD.md', readmeskelaton, (err) =>
            err ? console.error(err) : console.log('success!'))
    })
    // Prompt couldn't be rendered in the current environment
    .catch((error) => {
        if (error.isTtyError) {
            // Something else went wrong
        } else {
        }
    });