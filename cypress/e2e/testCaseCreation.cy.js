import loginPage from "./POM/loginPage";
import inventoryPage from "./POM/inventoryPage";
  
  describe('Login Page', () => {

    it('Login with valid credentials', () => {
      loginPage.visit();
      loginPage.inputUsername('standard_user');
      loginPage.inputPassword('secret_sauce');
      loginPage.clickLoginButton();
      loginPage.assertUrl();
      loginPage.assertRedirectTitle();
    });

    it('Login with invalid credentials', () => {
      loginPage.visit();
      loginPage.inputUsername('standard_user');
      loginPage.inputPassword('wrong_password');
      loginPage.clickLoginButton();
      loginPage.assertWrongPassword();
    });
  });

  describe('Inventory Page', () => {

    it('Add item to cart', () => {
      cy.login("standard_user","secret_sauce");

    });

    it('Access Inventory Page Without Login', () => {

      inventoryPage.visit();
      inventoryPage.assertErrorAccess();

    });
  });

  describe('Cart Page', () => {

    it('', () => {

    });

    it('', () => {

    });
  });

  describe('Check Out Step One', () => {

    it('', () => {

    });

    it('', () => {

    });
  });

  describe('Check Out Step Two', () => {

    it('', () => {

    });

    it('', () => {

    });
  });

  describe('Check Out Complete', () => {

    it('', () => {

    });

    it('', () => {

    });
  });