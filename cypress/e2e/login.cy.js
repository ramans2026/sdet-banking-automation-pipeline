describe('Banking App Login', () => {
  it('User should login successfully into the banking app', () => {
    // 1. Open banking site
    cy.visit('/')

    // 2. Click Customer Login
    cy.contains('Customer Login').click()

    // 3. Select user
    cy.get('select').select('1')

    // 4. Click login
    cy.get('button').contains('Login').click()

    // 5. Verify dashboard
    cy.contains('Welcome').should('be.visible');
    cy.contains('Logout').should('be.visible');
  })
})
