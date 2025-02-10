class checkoutStepTwo {
  elements = {
    checkoutTwoTitle: () => cy.get('[data-test="title"]'),
    btnFinish: () => cy.get('[data-test="finish"]'),
    btnCancel: () => cy.get('[data-test="cancel"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
  };

  visit() {
    cy.visit("/checkout-step-two.html", { failOnStatusCode: false });
  }

  assertCheckoutTitle() {
    this.elements.checkoutTwoTitle().should("contain", "Checkout: Overview");
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

  clickFinish() {
    this.elements.btnFinish().click();
  }

  assertErrorMessage() {
    this.elements
      .errorMessage()
      .should(
        "contain",
        "You can only access '/checkout-step-two.html' when you are logged in."
      );
  }
}

module.exports = new checkoutStepTwo();
