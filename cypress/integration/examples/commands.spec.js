describe('commands fun', () => {
    it('try with url command', () => {
      cy.visit('cypress/index.html')
      cy.url().should('contain','index.html')  
    })
    it('try with title command', () => {
      cy.visit('cypress/index.html')
      cy.title().should('eq','Cypress Tutorials')  
    })
})