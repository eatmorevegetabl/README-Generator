const inquirer = require('inquirer');
const fs = require('fs');
const generateMd = require('./utils/generateMd.js');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How does one install this app?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does one use this app?',
    },
    {
      type: 'list',
      message: 'Which license did you use on your app?',
      name: 'license',
      choices: ['MIT', 'Public domain', 'GNU'],
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Who contributed to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How do you test this app?',
    },
    {
      type: 'input',
      name: 'ghusername',
      message: 'Please enter your Github username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Pls enter your email',
    },
  ])
  .then((data) => {
    fs.writeFile('README.md', generateMd(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
