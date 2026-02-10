class LoginPage {
  visit() {
    cy.visit('/');
  }

  selectUser(username) {
    cy.contains(username).click();
  }

  clickLogin() {
    cy.contains('Login').click();
  }
}

export default new LoginPage();
