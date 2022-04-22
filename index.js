// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

// TODO: import the generateMarkdown function from utils/generateMarkdown.js
// TODO: Write code to get user input, generate markdown, and save it to a file.

//Questions Array for Read Me
const questions = [{
    type: "input",
    message: "What is the name of your project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about?",
    name: "Decription"
}, {
    type: "input",
    message: "What needs to be installed to run this app?",
    name: "Installation"
}, {
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"

}, {
    type: "input",
    message: "Describe how the app is used.",
    name: "Usage Information"
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
    name: "GitHub User"
    
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email Address"
},
]
//Function to write readme.md file
function init() {
    inquirer.prompt(questions) .then (function(data) {
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data)
    })
}