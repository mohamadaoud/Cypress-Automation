describe('Cypress Automation Demo', () => {
    beforeEach(() => {
      //open baseUrl before each test we run
      cy.visit(Cypress.env('baseUrl'))
      // we are not logged in
    })

    it('Login Scenario with wrong credentials', () => {
        //select CSS selector for username field and type 'wrong@email.com'
        cy.get('#username').type('wrong@email.com')
        //select CSS selector for password field and type 'no-such-user'
        cy.get('#password').type('no-such-user')
        //select CSS selector for login button and click it'
        cy.get('#login > button').click()   
    
        // error message is shown and we remain on the login page
        cy.contains('#flash', 'Your username is invalid!')
        cy.url().should('contain', '/login')
      })
    
  
    it('Login Scenario with correct credentials', () => {
        const user = Cypress.env('user')
        //select CSS selector for username field
        //bring email value from cypress.json file using user variable
        cy.get('#username').type(user.email)
        //select CSS selector for password field
        //bring password value from cypress.json file using user variable
        cy.get('#password').type(user.password)
        //select CSS selector for login button and click it'
        cy.get('#login > button').click() 
        // url is /
        cy.url().should('not.contain', '/login')      
    })

    it('Login and Logout Scenarios', () => {
       
        const user = Cypress.env('user')
        cy.get('#username').type(user.email)
        cy.get('#password').type(user.password)
        cy.get('#login > button > i').click() 
        //select CSS selector for logout button and click it'
        cy.get('#content > div > a > i').click()

        //Logged out message is shown when we redirected to the login page
        cy.contains('#flash', 'You logged out of the secure area!')
        cy.url().should('contain', '/login')
    })  
})