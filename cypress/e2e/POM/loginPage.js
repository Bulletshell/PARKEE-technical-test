class loginPage {
  elements = {
    usernameInput: (username) =>
      cy.get('[data-test="username"]').type(username),
    passwordInput: (password) =>
      cy.get('[data-test="password"]').type(password),
    formPassword: () => cy.get('[data-test="password"]'),
    btnLogin: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
  };

  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  inputUsername(username) {
    this.elements.usernameInput(username).should("have.value", username);
  }

  inputPassword(password) {
    this.elements.passwordInput(password).should("have.value", password);
  }

  clickLoginButton() {
    this.elements.btnLogin().click({ timeout: 10000 });
  }

  assertWrongPassword() {
    this.elements
      .errorMessage()
      .should(
        "contain",
        "Username and password do not match any user in this service"
      );
  }

  assertPasswordAttribute() {
    this.elements.formPassword().should("not.have.attr", "value");
  }
}

module.exports = new loginPage();
