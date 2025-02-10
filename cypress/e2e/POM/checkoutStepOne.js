class checkoutStepOne {
  elements = {
    checkoutOneTitle: () => cy.get('[data-test="title"]'),
    formFirstName: (firstName) =>
      cy.get('[data-test="firstName"]').type(firstName),
    formLastName: (lastName) => cy.get('[data-test="lastName"]').type(lastName),
    formPostalCode: (postalCode) =>
      cy.get('[data-test="postalCode"]').type(postalCode),
    btnContinue: () => cy.get('[data-test="continue"]'),
    btnCancel: () => cy.get('[data-test="cancel"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
  };

  visit() {
    cy.visit("/checkout-step-one.html", { failOnStatusCode: false });
  }

  assertCheckoutTitle() {
    this.elements
      .checkoutOneTitle()
      .should("contain", "Checkout: Your Information");
  }

  inputFirstName(firstName) {
    this.elements.formFirstName(firstName).should("have.value", firstName);
  }

  inputLastName(lastName) {
    this.elements.formLastName(lastName).should("have.value", lastName);
  }

  inputPostalCode(postalCode) {
    this.elements.formPostalCode(postalCode).should("have.value", postalCode);
  }

  clickContinue() {
    this.elements.btnContinue().click();
  }

  assertErrorMessage() {
    this.elements.errorMessage().should("contain", "First Name is required");
  }
}

module.exports = new checkoutStepOne();
