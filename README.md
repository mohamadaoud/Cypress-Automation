# Cypress-automation
An automated regression suite for the login component of an app using the following link: https://the-internet.herokuapp.com/login

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


# Add visual regression testing to Cypress

Install Cypress visual testing on Visual Studio code terminal:
- npm install cypress-visual-testing

- Add also the following config to your cypress.json file:

    {
        
        "screenshotsFolder": "cypress/snapshots/actual",
        
        "trashAssetsBeforeRuns": true,
        
    }

- Add the plugin to cypress/plugins/index.js:

    
    const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

    module.exports = (on, config) => {
    
    getCompareSnapshotsPlugin(on, config);
    
    };
    

- And add the command to cypress/support/commands.js:

    
    const compareSnapshotCommand = require('cypress-visual-regression/dist/command');

    
    compareSnapshotCommand();
    
- Once the configuration is ready, we can add our visual testing checkpoints into our existing cypress tests, let’s see how:

    describe('Cypress Automation Demo', () => {
    
    beforeEach(() => {
    
      //open baseUrl before each test we run
      cy.visit(Cypress.env('baseUrl'))
      
      // we are not logged in
      
     ** cy.compareSnapshot('Home Page', {
     
        capture: 'fullPage',
        
        errorThreshold: 0.0
        
      });**
      
    })
    
    
The visual regression testing will validate zero difference between the base and the actual image comparison. To run basic comparisons, we need to have a baseline image; let’s explore that by running the following command in terminal:

- npx cypress run --env type=base

Once the command is completed, we should see a new couple of folders under the snapshots folder.

Once the baseline is created, we’re ready to compare and run a test; first, we need to run the following command:

- npx cypress run --env type=actual

After the command runs successfully, we will see the folder structure under the snapshots folder.

Now we have three folders created, one for the actual result, one for the base image, and another for spotting the difference between the images.


And that's all folks!

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

