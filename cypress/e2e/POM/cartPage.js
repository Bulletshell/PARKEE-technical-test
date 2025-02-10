class cartPage {
  elements = {
    cartPageTitle: () => cy.get('[data-test="title"]'),
    btnBack: () => cy.get('[data-test="continue-shopping"]'),
    btnCheckout: () => cy.get('[data-test="checkout"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
  };

  visit() {
    cy.visit("/cart.html", { failOnStatusCode: false });
  }

  clickCheckoutButton() {
    this.elements.btnCheckout().click();
  }

  asserCartTitle() {
    this.elements.cartPageTitle().should("contain", "Your Cart");
  }

  assertErrorMessage() {
    this.elements.errorMessage().should("contain", "Your cart is empty");
  }
}

module.exports = new cartPage();
