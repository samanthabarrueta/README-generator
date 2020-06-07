const inquirer = require('inquirer')

inquirer.prompt([
    {
        type:'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type:'input',
        name: 'description',
        message: 'Give a brief description of your project:'
    },
    {
        type:'input',
        name: 'tableOfContents',
        message: 'Add a table of contents:'
    },
    {
        type:'input',
        name: 'installation',
        message: 'Installation guidelines and requirements for your project:'
    },
    {
        type:'input',
        name: 'usage',
        message: 'Describe the usage of your project:'
    },
    {
        type:'input',
        name: 'license',
        message: 'How is your project licensed?'
    },
    {
        type:'input',
        name: 'contributing',
        message: 'Contribution requirements for your project:'
    },
    {
        type:'input',
        name: 'tests',
        message: 'Explain how to run tests for your project:'
    },
    {
        type:'input',
        name: 'github',
        message: 'What is your github username?'
    }

])
.then((answer) => {
    const readmeGen = `
# ${answer.title}

# Description:
${answer.description}

# Table of Contents:
${answer.description}
${answer.installation}
${answer.usage}
${answer.license}
${answer.contributing}
${answer.tests}
${answer.github}

# Installation:
${answer.installation}

# Usage
${answer.usage}

# License
${answer.license}

# Contributing:
${answer.contributing}

# Tests:
${answer.tests}

# Github: 
${answer.github}
    `
})

 




// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
