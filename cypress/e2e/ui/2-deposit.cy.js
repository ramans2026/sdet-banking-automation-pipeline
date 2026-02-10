import AccountPage from '../../pages/AccountPage';
import { randomAmount } from '../../support/utils';

describe('Deposit Test', () => {
  it('should deposit random amount', () => {

    const amount = randomAmount();

    cy.loginAsValidUser();   // <-- use here

    AccountPage.deposit(amount);
    AccountPage.verifySuccess();

  });
});
