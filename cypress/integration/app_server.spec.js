context('Server Requests', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })
    it("get data on request", () => {
        cy.request('http://localhost:3000/api/questions')
          .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(4)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
          })
    })
})