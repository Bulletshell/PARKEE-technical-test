# QA Automation Technical Test - PARKEE

---

# Cypress Test Automation Project

This repository contains Cypress test scripts for:

1. **API Validation** for the One Piece API (`https://api.api-onepiece.com/v2/characters/en`).
2. **UI Test Cases** for the SauceDemo website (`https://www.saucedemo.com/`).

---

## Prerequisites

Before running the tests, ensure you have the following installed on your system:

1. **Node.js** (v14 or higher)

   - Download and install from [Node.js official website](https://nodejs.org/).
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```

2. **Git** (optional, for cloning the repository)
   - Download and install from [Git official website](https://git-scm.com/).
   - Verify installation:
     ```bash
     git --version
     ```

---

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Bulletshell/PARKEE-technical-test.git
   ```

2. **Install Dependencies**

   - Install Cypress and other required packages:
     ```bash
     npm install
     ```

3. **Verify Cypress Installation**
   - Run the following command to ensure Cypress is installed correctly:
     ```bash
     npx cypress --version
     ```

---

## Running the Tests

### 1. **API Validation Tests**

- The API tests validate the One Piece API endpoint (`https://api.api-onepiece.com/v2/characters/en`).
- To run the API tests:
  ```bash
  npx cypress run --spec "cypress/e2e/apiValidationTest.cy.js"
  ```
  or
  ```bash
  npm run apiTest
  ```

### 2. **UI Tests for SauceDemo**

- The UI tests cover the SauceDemo website, including login, inventory, cart, and checkout functionality.
- To run the UI tests:
  ```bash
  npx cypress run --spec "cypress/e2e/testCaseCreation.cy.js"
  ```
  or
  ```bash
  npm run webTest
  ```

### 3. **Run All Tests**

- To execute all tests (API and UI):
  ```bash
  npx cypress run
  ```
  or
  ```bash
  npm run all
  ```

### 4. **Run Tests in Interactive Mode**

- Open the Cypress Test Runner to run tests interactively:
  ```bash
  npx cypress open
  ```
  or
  ```bash
  npm run open
  ```

---

## Test Structure

- **API Tests**:

  - File: `cypress/e2e/apiValidationTest.cy.js`
  - Validates:
    - Status code (200).
    - Unique character IDs.
    - Exclusive "Gum-Gum Fruit" for Monkey D. Luffy.

- **UI Tests**:
  - File: `cypress/e2e/testCaseCreation.cy.js`
  - Covers:
    - Login Page
    - Inventory Page
    - Cart Page
    - Checkout Step One
    - Checkout Step Two
    - Checkout Complete Page

---

## Bugs Identified

1. **Bug 1**: Password is visible in the password input value attribute.
2. **Bug 2**: Empty cart allows proceeding to checkout (no error message visible).

---

ℹ️ **_NOTE:_** The 'Check out with empty cart' case should fail because no Error Message appear
