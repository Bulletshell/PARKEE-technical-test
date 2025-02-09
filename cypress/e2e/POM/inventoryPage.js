class inventoryPage{
    elements = {
        sortFilter: () => cy.get('[data-test="product-sort-container"]'),
        btnAddToCart: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        menuCart: () => cy.get('[data-test="shopping-cart-link"]'),
        cartBadge: () => cy.get('[data-test="shopping-cart-badge]'),
        errorMessage: () => cy.get('[data-test="error"]')
        
    }

    visit(){
        cy.visit('/inventory.html', {failOnStatusCode: false});
    }

    AddToCart(){
        this.elements.btnAddToCart().click()
    }
    assertErrorAccess(){
        cy.url().should('include', '/');
        this.elements.errorMessage().should('contain', "You can only access '/inventory.html' when you are logged in.")
    }
    
}

module.exports = new inventoryPage();