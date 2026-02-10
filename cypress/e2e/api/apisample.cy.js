describe('Sample API Test', () => {
  it('should get users successfully', () => {
    cy.request('https://jsonplaceholder.typicode.com/users')
      .its('status')
      .should('eq', 200);
  });
});
