import LoginPage from '../../pages/LoginPage';

describe('Login Test', () => {
  it('should login successfully', () => {

    cy.fixture('users').then((users) => {

      LoginPage.visit();
      LoginPage.openCustomerLogin();   // important step
      LoginPage.selectUser(users.validUser.username);
      LoginPage.clickLogin();

      cy.contains('Logout').should('be.visible');
    });

  });
});
