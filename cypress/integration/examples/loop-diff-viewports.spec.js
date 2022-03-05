describe('tests to check with different screen sizes', () => {
    ['iphone-x','ipad-mini','macbook-16','samsung-s10'].forEach(size=>{
        it('Viewport fun with '+size, () => {
            cy.viewport(size)
            cy.visit('https://docs.cypress.io/api/commands/visit')
          })
    })
    
})