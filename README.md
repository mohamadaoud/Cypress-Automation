# Cypress-automation
An automated regression suite for the login component of the app using the following link: https://the-internet.herokuapp.com/login

# Cypress-automation-login-tests
Tests are in the folder cypress/integration

login-spec.js shows successful and unsuccessful login scenarios via user interface using correct and wrong credentials

# Environment
Using Windows 7 and above (64-bit only)

# Test-setup
* Nodejs
* npm
* Visual Studio Code
* Cypress

Once you installed Nodejs and Visual Studio Code; 
- Open Visual Studio Code, run the following command: npm init (set up a new or existing npm package)

Install Cypress via npm by running the following commands:
- cd /your/project/path
- npm install cypress --save-dev

Opening Cypress by running the following command:
- ./node_modules/.bin/cypress open

set the environment for url, username and passsword in cypress.json file

{
    
    "env": {
    
    "baseUrl": "https://the-internet.herokuapp.com/login",
    
    "user": {
    
    "email": "tomsmith",
    
    "password": "SuperSecretPassword!"
    
    }
    
    },
    
    "viewportHeight": 1000,
    
    "viewportWidth": 1000

}



View login-spec.js, where three scenarios are tested for the app and scenarios are described as follows:
- Login Scenario with wrong credentials
- Login Scenario with correct credentials
- Login and Logout Scenarios

And that's all folks!

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

