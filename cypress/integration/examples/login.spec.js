describe('This for login scenario', () => {
    it('visit the login url of demo site', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    })
    it('check url', () => {
        cy.url().should('include','login')
    })
})