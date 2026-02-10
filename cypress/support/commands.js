Cypress.Commands.add('loginAsValidUser', () => {
  cy.fixture('users').then((users) => {
    cy.visit('/');
    cy.contains(users.validUser.username).click();
    cy.contains('Login').click();
  });
});
