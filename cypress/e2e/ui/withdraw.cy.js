describe('Withdraw Flow', () => {
  it('User should withdraw money successfully', () => {
    cy.loginAsCustomer('Harry Potter');

    // Deposit money first to ensure sufficient balance
    cy.contains('button', 'Deposit').click();
    cy.get('.mainBox').within(() => {
      cy.get('input[type="number"]').clear().type('100');
      cy.get('button[type="submit"]').click();
    });
    cy.wait(1500);

    // Click the Withdraw button
    cy.contains('button', 'Withdrawl').click();
    cy.wait(500);

    // Enter withdrawal amount safely: alias the input and break the chain
    const amountSelector = '.mainBox input[type="number"]';
    cy.get(amountSelector).should('exist').and('be.visible').as('withdrawInput');
    cy.get('@withdrawInput').clear();
    // ensure the input is still attached, then type
    cy.get('@withdrawInput').should('have.value', '').type('10');
    cy.wait(500);
    cy.get('.mainBox button[type="submit"]').click();
    cy.wait(1500);

    // Verify balance decreased (should be 90)
    cy.get('.center strong').eq(1).invoke('text').should('include', '90');
  });
});
