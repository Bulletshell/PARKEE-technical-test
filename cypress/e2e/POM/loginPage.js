class loginPage{
    elements = {
        usernameInput: (username) => cy.get('[data-test="username"]').type(username),
        passwordInput: (password) => cy.get('[data-test="password"]').type(password),
        btnLogin: () => cy.get('[data-test="login-button"]'),
        inventoryPageTitle: () => cy.get('[data-test="title"]'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    visit(){
        cy.visit('https://www.saucedemo.com/')
    }

    inputUsername(username){
        this.elements.usernameInput(username)
        .should('have.value', username)
    }

    inputPassword(password){
        this.elements.passwordInput(password)
        .should('have.value', password)
    }

    clickLoginButton(){
        this.elements.btnLogin().click({timeout: 10000});
    }

    assertUrl(){
        cy.url().should('include', 'inventory.html')
    }

    assertRedirectTitle(){
        this.elements.inventoryPageTitle().should('contain', "Products")
    }

    assertWrongPassword(){
        this.elements.errorMessage().should('contain', "Username and password do not match any user in this service")
    }
}

module.exports = new loginPage();