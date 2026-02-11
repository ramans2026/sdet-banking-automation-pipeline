class LoginPage {
  visit() {
    cy.visit('/');
  }

  openCustomerLogin() {
    cy.contains('Customer Login', { timeout: 10000 }).click();
  }

  selectUser(username) {
    cy.get('#userSelect', { timeout: 10000 }).should('be.visible');
    cy.get('#userSelect').select(username);
  }

  clickLogin() {
    cy.contains('Login').click();
  }
}

export default new LoginPage();
