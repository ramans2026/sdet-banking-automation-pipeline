import AccountPage from '../../pages/AccountPage';
import { randomAmount } from '../../support/utils';

describe('Deposit Test', () => {
  it('should deposit random amount', () => {

    const amount = randomAmount();

    cy.loginAsValidUser();   // <-- use here
    cy.pause();
    // Debug info while paused
    cy.url().then(u => cy.log('url: ' + u));
    cy.title().then(t => cy.log('title: ' + t));
    cy.screenshot('paused-page-deposit');
    cy.get('body').then(($body) => {
      cy.log('select count: ' + $body.find('select#userSelect, select').length);
      cy.log("customerLogin count: " + $body.find("button:contains('Customer Login')").length);
      cy.log("loginBtn count: " + $body.find("button:contains('Login')").length);
      cy.log('welcome text: ' + $body.find('span.fontBig').text());
    });

    AccountPage.deposit(amount);
    AccountPage.verifySuccess();

  });
});
