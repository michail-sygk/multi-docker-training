describe('Dummy test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3050/')
    expect(true).to.equal(true); 
  })
})