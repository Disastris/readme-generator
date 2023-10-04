//These functions will let JS know that they need to get help from these programs
const fs = require('fs');
const inquirer = require('inquirer');

const generateREADME = ({ title, description, installation, license, contribution, tests, usage, username, email }) =>
`## ${title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Contributions](#contribution)
- [Tests](#tests)
- [Usage](#usage)
- [Contact Me Page](#contact-me-page)

## Description 
${description}

## Installation
${installation}

## license
${license}

## Contribution
${contribution}

## Tests
${tests}

## Usage
${usage}

## Contact Me Page
${username}
${email}`

inquirer
    .prompt([
    {
      type: 'input',
      message: 'What is the title of your README?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write down a description of your explaining your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Write down the steps used to install the application',
      name: 'installation',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What licenses do you want for your README?',
      choices: ['Apple','Banana','Orange','Plum']
    },
    {
      type: 'input',
      message: 'What is this application gonna be used for?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'If someone were wanting to contribute how would they do that?',
      name: 'contribution',
    },
    {
    type: 'input',
    message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here',
    name: 'tests',
    },
    {
    type: 'input',
    message: 'What is your github username?',
    name: 'username',
    },
    {
    type: 'input',
    message: 'What is your email if someone wanted to reach out to you?',
    name: 'email',
    },
  ])
   .then((answers) => {
    const readMEPageContent = generateREADME(answers);

    fs.writeFile('README', readMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });
