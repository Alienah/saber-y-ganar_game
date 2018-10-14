describe("Saber y ganar game application", () => {
    it("shows game rules container", () => {
        cy.visit("/");
        cy.get(".explanation__text")
          .contains("Bienvenido a este")
        
        // cy.get("#intro-container")
        //   .should("have.css", )
    })    
})