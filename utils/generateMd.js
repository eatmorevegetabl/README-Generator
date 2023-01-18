function generateMd(data) {
  return `
# ${data.title}
## Description:
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation:
${data.installation}
## Usage:
${data.usage}
## License:
${data.license}
## Contributions:
${data.contributions}
## Tests:
${data.tests}
## Questions:
- Github: https://github.com/${data.ghusername}
- Email: ${data.email}
    `;
}

module.exports = generateMd;
