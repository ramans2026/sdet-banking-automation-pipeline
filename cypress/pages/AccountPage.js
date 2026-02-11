class AccountPage {
  waitForAccountPage() {
    cy.contains('Account Number', { timeout: 15000 })
      .should('be.visible');
  }

  deposit(amount) {
    this.waitForAccountPage();

    cy.contains('Deposit', { timeout: 10000 })
      .should('be.visible')
      .click();

    // wait for form to stabilize
    cy.get('input[ng-model="amount"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled');

    cy.get('input[ng-model="amount"]')
      .clear()
      .type(amount);

    cy.get('button[type="submit"]').click();
  }

  withdraw(amount) {
    this.waitForAccountPage();

    cy.contains('Withdrawl', { timeout: 10000 })
      .should('be.visible')
      .click();

    // wait for form to stabilize
    cy.get('input[ng-model="amount"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled');

    // re-query the element before typing
    cy.get('input[ng-model="amount"]')
      .clear()
      .type(amount);

    cy.get('button[type="submit"]').click();
  }

  verifySuccess() {
    cy.contains(/successful/i, { timeout: 10000 })
      .should('be.visible');
  }
}

export default new AccountPage();
