describe('commands fun', () => {
    it('try with url command', () => {
        //https://docs.cypress.io/api/commands/url
      cy.visit('cypress/index.html')
      cy.url().should('contain','index.html')  
    })
    it('try with title command', () => {
        //https://docs.cypress.io/api/commands/title
      cy.visit('cypress/index.html')
      cy.title().should('eq','Cypress Tutorials')  
    })

    it('try with go command', () => {
        //https://docs.cypress.io/api/commands/go#Arguments
      cy.visit('cypress/index.html')
      cy.contains('About').click()
      cy.go('back')
      cy.url().should('contain','index.html')
      cy.go('forward')
      cy.url().should('contain','about.html') 
    })
})