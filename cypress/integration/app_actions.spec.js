context('Actions in the game', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })
    it('shows the questions and the result of my answers and save them', ()=> {
        cy.wait(1000)
        cy.get('#btn-start').click();
        cy.get('.intro-container').should('not.be.visible')
        cy.wait(1000)   
        cy.get('#item-1').click();
        cy.wait(1000)
        cy.get('#btn-next').click();
        cy.wait(1000)
        cy.get('#item-0').click();
        cy.wait(1000)
        cy.get('#btn-next').click();
        cy.wait(1000)
        cy.get('#item-0').click();
        cy.wait(1000)
        cy.get('#btn-next').click();
        cy.wait(1000)
        cy.get('#item-2').click();
        cy.wait(1000)
        cy.get('#btn-next').click();
        cy.wait(1000)
        cy.get('#player-name').type('Guybrush Threepwood').should('have.value', 'Guybrush Threepwood');
        cy.wait(1000)
        cy.get('#btn-send').click();
        cy.wait(1000)
        cy.get('#score-container').should('be.visible');
    })
})
