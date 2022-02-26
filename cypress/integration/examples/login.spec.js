describe('This for login scenario', () => {
    it('visit the login url of demo site', () => {
        cy.viewport('iphone-5')
        cy.visit('http://zero.webappsecurity.com/login.html')
    })
    it('check url', () => {
        cy.viewport('iphone-6+')
        cy.url().should('include','login')
    })
    it('filling username', () => {
        cy.viewport('iphone-x')
        cy.get('#user_login').clear()
        cy.get('#user_login').type('user')
    })
    it('filling password', () => {
        cy.viewport('macbook-16')
        cy.get('#user_password').clear()
        cy.get('#user_password').type('name')
    })
    it('submit', () => {
        cy.viewport('samsung-s10')
        cy.contains('Sign in').click()
    })
    it('error check', () => {
        cy.viewport('ipad-2')
        cy.get('.alert-error').should('be.visible').and('contain',
        'Login and/or password are wrong.')
    })
    it('checkbox fun', () => {
        cy.viewport('iphone-8')
        cy.get('#user_remember_me').click()
        //cy.wait(5000)
        cy.get('input[type="checkbox"]').click()
    })
})