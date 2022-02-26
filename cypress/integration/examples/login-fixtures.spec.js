describe('Login with Fixtures', () => {
  it('Login try with fixtures', () => {
      cy.visit('http://zero.webappsecurity.com/login.html')
      cy.title().should('include','Zero - Log in')
      cy.url().should('include','login.html')

      cy.fixture('user').then(user=>{
          const username = user.username
          const password = user.password

          cy.get('#user_login').type(username)
          cy.wait(5000)
          cy.get('#user_password').type(password)
          cy.wait(5000)
          cy.contains('Sign in').click()
      })
  }) 
})