class checkoutComplete {
  elements = {
    checkoutCompleteTitle: () => cy.get('[data-test="title"]'),
    completeMessage: () => cy.get('[data-test="complete-header"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
    btnBackHome: () => cy.get('[data-test="back-to-products"]'),
  };

  visit() {
    cy.visit("/checkout-complete.html", { failOnStatusCode: false });
  }

  assertCheckoutTitle() {
    this.elements
      .checkoutCompleteTitle()
      .should("contain", "Checkout: Complete!");
  }

  assertMessage() {
    this.elements
      .completeMessage()
      .should("contain", "Thank you for your order!");
  }

  assertErrorMessage() {
    this.elements
      .errorMessage()
      .should(
        "contain",
        "You can only access '/checkout-complete.html' when you are logged in."
      );
  }

  clickBackHome() {
    this.elements.btnBackHome().click();
  }
}

module.exports = new checkoutComplete();
