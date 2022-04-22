function generateMarkdown(data) {

  return `# ${data.Title}
  https://github.com/${data.User}/${data.Title}
  ##Description
  ${data.Description}


  ##Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[License](#license)
  *[Contact](#contact)

  ##Installation
  The following programs must be installed to run the application ${data.Installation}
  
  ##Usage
  To be able to use this app, ${data.Usage}
  
  ##Contributors: 
  Contributors: ${data.Contributing}
  ##Tests
  ${data.Tests} will be needed to run the test.
 
  ##License
  This project is licensed under the ${data.License} license.
  ![GitHub license] (https://img.shields.io/badge/license-MIY-blue.svg())
  
  ##Contact
  Email Address: ${data.Email}
  ` 
  }
  module.exports = generateMarkdown;
