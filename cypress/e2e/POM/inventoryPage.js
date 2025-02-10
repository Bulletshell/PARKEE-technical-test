class inventoryPage {
  elements = {
    inventoryPageTitle: () => cy.get('[data-test="title"]'),
    sortFilter: () => cy.get('[data-test="product-sort-container"]'),
    btnAddToCart1: () =>
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    btnAddToCart2: () =>
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
    btnAddToCart3: () =>
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
    btnAddToCart4: () =>
      cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]'),
    btnAddToCart5: () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]'),
    btnAddToCart6: () =>
      cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'),
    menuCart: () => cy.get('[data-test="shopping-cart-link"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
  };

  visit() {
    cy.visit("/inventory.html", { failOnStatusCode: false });
  }

  assertUrl() {
    cy.url().should("include", "inventory.html");
  }

  AddToCart() {
    this.elements.btnAddToCart1().click();
  }

  clickCartMenu() {
    this.elements.menuCart().click();
  }

  assertInventoryTitle() {
    this.elements.inventoryPageTitle().should("contain", "Products");
  }

  assertCartItem(value) {
    cy.wait(500);
    this.elements.menuCart().should("have.text", "1");
  }

  assertErrorAccess() {
    cy.url().should("include", "/");
    this.elements
      .errorMessage()
      .should(
        "contain",
        "You can only access '/inventory.html' when you are logged in."
      );
  }
}

module.exports = new inventoryPage();
