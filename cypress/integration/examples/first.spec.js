describe('First test', () => {
    it('First test assert',()=>{
        expect(true).to.equal(true)
    })
    it('visit website - google',()=>{
        cy.visit('https://www.google.com')
    })
})