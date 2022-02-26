describe('Screenshot tests', () => {
    it('Full page screenshot', () => {
        cy.visit('https://books.toscrape.com/index.html')
        cy.screenshot({capture:'fullPage'})
    })
    it('Single element screenshot', () => {
        
    })
})