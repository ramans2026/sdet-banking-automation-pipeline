import AccountPage from '../../pages/AccountPage';
import { randomAmount } from '../../support/utils';

describe('Withdraw Test', () => {
  it('should withdraw random amount', () => {

    const depositAmount = randomAmount(200, 500);
    const withdrawAmount = randomAmount(50, 150);

    cy.loginAsValidUser();

    // Deposit first
    AccountPage.deposit(depositAmount);
    AccountPage.verifySuccess();

    // Withdraw safely
    AccountPage.withdraw(withdrawAmount);
    AccountPage.verifySuccess();

  });
});
