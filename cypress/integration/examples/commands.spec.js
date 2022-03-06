describe('commands fun', () => {
    it('try with url command', () => {
      cy.visit('cypress/index.html')
      cy.url().should('contain','index.html')  
    })
    it('try with title command', () => {
      cy.visit('cypress/index.html')
      cy.title().should('eq','Cypress Tutorials')  
    })

    it('try with go command', () => {
      cy.visit('cypress/index.html')
      cy.contains('About').click()
      cy.go('back')
      cy.url().should('contain','index.html')
      cy.go('forward')
      cy.url().should('contain','about.html') 
    })
})