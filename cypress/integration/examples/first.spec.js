describe('website page test', () => {
    it('visit website - bookstore',()=>{
        cy.visit('https://books.toscrape.com/')
    })
    it('assertion- check url',()=>{
        cy.url().should('include', 'toscrape')
    })
    it('check element visible',()=>{
        cy.get('h1').should('be.visible')
    })
    it('click an element',()=>{
        cy.get('a').contains('Classics').click()
    })
    it('assertion - check url', () => {
        cy.url().should('include','classics_6/index.html')
    })
    it('should contain correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq',19)
    })
    it('poetry - check url', () => {
        cy.get('a').contains('Poetry').click()
    })
    it('poetry url check', () => {
        cy.url().should('include','poetry_23/index.html')
    })
    it('Find book Olio', () => {
        cy.get('.product_pod').contains('Olio').click()
    })
    it('Olio url check', () => {
        cy.url().should('include','olio_984/index.html')
    })

})