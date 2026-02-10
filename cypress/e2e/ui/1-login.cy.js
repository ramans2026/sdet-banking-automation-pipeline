import LoginPage from '../../pages/LoginPage';

describe('Login Test', () => {
  it('should login successfully', () => {

    cy.fixture('users').then((users) => {
      LoginPage.visit();
      LoginPage.selectUser(users.validUser.username);
      LoginPage.clickLogin();
    });

  });
});
