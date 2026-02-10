class AccountPage {
  deposit(amount) {
    cy.contains('Deposit').click();
    cy.get('input[ng-model="amount"]').type(amount);
    cy.get('button[type="submit"]').click();
  }

  withdraw(amount) {
    cy.contains('Withdrawl').click();
    cy.get('input[ng-model="amount"]').type(amount);
    cy.get('button[type="submit"]').click();
  }

  verifySuccess() {
    cy.contains('successful').should('be.visible');
  }
}

export default new AccountPage();
