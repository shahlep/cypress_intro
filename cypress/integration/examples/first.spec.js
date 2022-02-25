describe('First test', () => {
    it('visit website - google',()=>{
        cy.visit('https://www.google.com')
    })
    it('assertion- check url',()=>{
        cy.url().should('include', 'google')
    })
    it('check element visible',()=>{
        cy.get('h1').should('be.visible')
    })
})