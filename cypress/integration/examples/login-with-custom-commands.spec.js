describe('Login with custom commands', () => {
  it('try custom commands', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.title().should('include','Zero - Log in')
    cy.url().should('include','login.html')

    cy.login('name','password')

    it('error check', () => {
        cy.get('.alert-error').should('be.visible').and('contain',
        'Login and/or password are wrong.')
    })
  }) 
})