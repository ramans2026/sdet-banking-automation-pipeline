# AI-Assisted Cypress Automation for Banking App

**Overview** : This project is a production-style Cypress automation framework built for a sample banking application.
It demonstrates UI automation, API testing, cross-browser execution, and CI/CD integration.

**Tech Stack**
Cypress
JavaScript
GitHub Actions
Page Object Model (POM)
Cross-browser testing (Chrome, Firefox, Edge)

**Test Coverage**
UI Tests - Customer login and Deposit transaction
API Tests - Sample user API validation

**Framework Structure**
cypress/
 ├── e2e/
 │   ├── api/
 │   └── ui/
 ├── fixtures/
 ├── pages/
 └── support/
 
**Key Features**
Page Object Model for maintainability
Fixture-based test data
Reusable custom commands
Randomized test data utilities
Cross-browser CI execution
GitHub Actions pipeline
CI/CD Pipeline
Tests run automatically on every push and pull request.

**How to Run Locally**
Install dependencies:
npm install
Run tests:
npx cypress run
Run in specific browser:
npx cypress run --browser chrome
**Demo Application** - https://www.globalsqa.com/angularJs-protractor/BankingProject/
