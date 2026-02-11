class LoginPage {
  visit() {
    cy.visit('/');
    cy.contains('Customer Login', { timeout: 15000 })
      .should('be.visible');
  }

  openCustomerLogin() {
    cy.contains('Customer Login', { timeout: 15000 })
      .should('be.visible')
      .click();
  }

  selectUser(username) {
    cy.get('#userSelect', { timeout: 15000 })
      .should('be.visible');
    cy.get('#userSelect').select(username);
  }

  clickLogin() {
    cy.contains('Login', { timeout: 10000 })
      .should('be.visible')
      .click();
  }
}

export default new LoginPage();
