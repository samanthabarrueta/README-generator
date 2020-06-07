const inquirer = require('inquirer');
const fs = require('fs');

const generateFile = () => { 
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

## <a name='Description'>Description:</a>
${answer.description}

## Table of Contents:
    * [Description](#Desciption)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#Tests)
    * [Github](#Github)

## Installation:
${answer.installation}

## Usage
${answer.usage}

## License
${answer.license}

## Contributing:
${answer.contributing}

## Tests:
${answer.tests}

## Github: 
${answer.github}
    `
    fs.writeFile('READMe.md', readmeGen, (err) => {
        if (err) throw err;
        console.log('Saved!');
    });
})

}

generateFile();
