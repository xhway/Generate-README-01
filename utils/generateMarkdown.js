
// TODO: Create a function to generate markdown for README
function generateMarkdown (data){
    return `# ${data.title}
    
    
## Description

${data.description}

## Table of Contents

* [Installation](#install)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contributors)
* [Tests](#test)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
This project is licensed under ${data.license}

## Contribution
${data.contributors}

## Tests
${data.test}

## Questions
If there any questions about this project, contact me at ${data.email}. You may also checkout more of my projects at https://github.com/${data.github}.
    `;
}



module.exports = generateMarkdown;