const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./utils/generateMarkdown');

//Questions Array for Read Me 
const questions = [{
    type: "input",
    message: "What is the name of your project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about?",
    name: "Description"
}, {
    type: "input",
    message: "What needs to be installed to run this app?",
    name: "Installation"
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
}, {
    type: "input",
    message: "Describe how the app is used.",
    name: "Usage"
}, {
    type: "input",
    message: "What are the contribution guielines?",
    name: "Contributing"
}, {
    type: "input",
    message: "What commands are needed to test this app?",
    name: "Tests"
}, {
    type: "list",
    name: "License",
    message: "Choose a license for the application.",
    choices : [
        "APACHE 2.0",
        "MIT",
        "BSD 3",
        "GVL-FPL 3.0",
        "None"
    ]
    
}, {
    type: "input",
    message: "What is your GitHub username?",
    name: "User"
    
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email"
},
]
//Function to write readme.md file
function writeToFile(fileName, data) {

fs.writeFile(fileName, data, function(err) {
  console.log(fileName)
  console.log(data)
  if (err) {
    return console.log(err)
  } else {
    return console.log("success!")
  }
  })
}
  function init() {
    inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("README.md", generatorMarkdown(data));
      console.log(data)
    })
  }
  init();