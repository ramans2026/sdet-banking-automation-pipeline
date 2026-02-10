import AccountPage from '../../pages/AccountPage';
import { randomAmount } from '../../support/utils';

describe('Withdraw Test', () => {
  it('should withdraw random amount', () => {

    const amount = randomAmount(50, 300);

    cy.loginAsValidUser();   // <-- use here

    AccountPage.withdraw(amount);
    AccountPage.verifySuccess();

  });
});
