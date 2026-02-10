import LoginPage from '../../pages/LoginPage';

describe('Login Test', () => {
  it('should login successfully', () => {
    LoginPage.visit();
    LoginPage.enterUsername('Harry Potter');
    LoginPage.enterPassword('123');
    LoginPage.clickLogin();

    // Verify customer name appears in the welcome header after login
    cy.get('.fontBig', { timeout: 10000 }).should('contain.text', 'Harry Potter');
  });
});
