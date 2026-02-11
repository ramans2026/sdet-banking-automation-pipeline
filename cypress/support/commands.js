import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('loginAsValidUser', () => {
  cy.fixture('users').then((users) => {
    LoginPage.visit();
    LoginPage.openCustomerLogin();   // required
    LoginPage.selectUser(users.validUser.username);
    LoginPage.clickLogin();
  });
});
