describe('Login with custom commands', () => {
  it('try custom commands', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.title().should('include','Zero - Log in')
    cy.url().should('include','login.html')

    cy.login('name','password')
  }) 
})