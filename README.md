#READ ME GENERATOR

USER STORY:
AS A developer
I WANT to be able to quickly have a ReadMe file generated for me by only answering some questions
SO THAT it saves me time 

ACCEPTANCE CRITERIA:
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README



#DESCRIPTION
This application will generate a READ.ME file after the user completes a series of questions.

##Table of Contents:
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[License](#license)
  *[Contact](#contact)



# TESTS
To run the test, enter: node index.js


#INSTALLATION NECESSARY
Inquire, fs, util are necessary to install for the app to run.

#CONTACT
Email address: lilyanaisabellan@gmail.com
