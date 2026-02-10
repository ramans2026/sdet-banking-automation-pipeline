class LoginPage {
  visit() {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  }

  enterUsername(username) {
    // The app uses a customer-select dropdown rather than a text input
    cy.contains('Customer Login').click();
    cy.get('#userSelect').select(username);
  }

  enterPassword(password) {
    // Password is not required for customer login in this app — no-op
    return this;
  }

  clickLogin() {
    cy.contains('button', 'Login').click();
  }
}

export default new LoginPage();
