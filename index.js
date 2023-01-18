const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Description',
      message: 'Why did you build this project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'Link',
      message: 'Pls add a link to your video:',
    },
  ])
  .then((data) => {
    const filename = `README.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
