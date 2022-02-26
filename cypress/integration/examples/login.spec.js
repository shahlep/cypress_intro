describe('This for login scenario', () => {
    it('visit the login url of demo site', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    })
    it('check url', () => {
        cy.url().should('include','login')
    })
    it('filling username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('user')
    })
    it('filling password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('name')
    })
    it('submit', () => {
        cy.contains('Sign in').click()
    })
    it('error check', () => {
        cy.get('.alert-error').should('be.visible')
    })
    it('checkbox fun', () => {
        cy.get('#user_remember_me').click()
        cy.wait(5000)
        cy.get('input[type="checkbox"]').click()
    })
})