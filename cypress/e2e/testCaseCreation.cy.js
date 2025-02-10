import loginPage from "./POM/loginPage";
import inventoryPage from "./POM/inventoryPage";
import cartPage from "./POM/cartPage";
import checkoutStepOne from "./POM/checkoutStepOne";
import checkoutStepTwo from "./POM/checkoutStepTwo";
import checkoutComplete from "./POM/checkoutComplete";

describe("Login Page", () => {
  it("Login with valid credentials", () => {
    loginPage.visit();
    loginPage.inputUsername("standard_user");
    loginPage.inputPassword("secret_sauce");
    loginPage.clickLoginButton();
    inventoryPage.assertUrl();
    inventoryPage.assertInventoryTitle();
  });

  it("Login with invalid credentials", () => {
    loginPage.visit();
    loginPage.inputUsername("standard_user");
    loginPage.inputPassword("wrong_password");
    loginPage.clickLoginButton();
    loginPage.assertWrongPassword();
  });

  it("Check if Password is not visible in the value attribute", () => {
    // Test should Fail because Password input has value attribute
    loginPage.visit();
    loginPage.inputUsername("standard_user");
    loginPage.inputPassword("secret_sauce");
    loginPage.assertPasswordAttribute();
  });
});

describe("Inventory Page", () => {
  it("Add item to cart", () => {
    cy.login("standard_user", "secret_sauce");
    inventoryPage.AddToCart();
    inventoryPage.assertCartItem(1);
  });

  it("Access inventory page without login", () => {
    inventoryPage.visit();
    inventoryPage.assertErrorAccess();
  });
});

describe("Cart Page", () => {
  it("Process checkout", () => {
    cy.login("standard_user", "secret_sauce");
    inventoryPage.AddToCart();
    inventoryPage.clickCartMenu();
    cartPage.asserCartTitle();
    cartPage.clickCheckoutButton();
    checkoutStepOne.assertCheckoutTitle();
  });

  it("Check out with empty cart", () => {
    // Test should Fail because no Error Message after check out with empty cart
    cy.login("standard_user", "secret_sauce");
    inventoryPage.clickCartMenu();
    cartPage.asserCartTitle();
    cartPage.clickCheckoutButton();
    cartPage.assertErrorMessage();
  });
});

describe("Check Out Step One", () => {
  it("Process check out with valid data", () => {
    cy.login("standard_user", "secret_sauce");
    inventoryPage.AddToCart();
    inventoryPage.clickCartMenu();
    cartPage.asserCartTitle();
    cartPage.clickCheckoutButton();
    checkoutStepOne.assertCheckoutTitle();
    checkoutStepOne.inputFirstName("Test");
    checkoutStepOne.inputLastName("Automation");
    checkoutStepOne.inputPostalCode(12345);
    checkoutStepOne.clickContinue();
  });

  it("Process check out without input information", () => {
    cy.login("standard_user", "secret_sauce");
    inventoryPage.AddToCart();
    inventoryPage.clickCartMenu();
    cartPage.asserCartTitle();
    cartPage.clickCheckoutButton();
    checkoutStepOne.assertCheckoutTitle();
    checkoutStepOne.clickContinue();
    checkoutStepOne.assertErrorMessage();
  });
});

describe("Check Out Step Two", () => {
  it("Proceed check out overview", () => {
    cy.login("standard_user", "secret_sauce");
    inventoryPage.AddToCart();
    inventoryPage.clickCartMenu();
    cartPage.asserCartTitle();
    cartPage.clickCheckoutButton();
    checkoutStepOne.assertCheckoutTitle();
    checkoutStepOne.inputFirstName("Test");
    checkoutStepOne.inputLastName("Automation");
    checkoutStepOne.inputPostalCode(12345);
    checkoutStepOne.clickContinue();
    checkoutStepTwo.assertCheckoutTitle();
    checkoutStepTwo.clickFinish();
    checkoutComplete.assertCheckoutTitle();
    checkoutComplete.assertMessage();
  });

  it("Access check out step two page without login", () => {
    checkoutStepTwo.visit();
    checkoutStepTwo.assertErrorMessage();
  });
});

describe("Check Out Complete", () => {
  it("Back to Homepage after success order", () => {
    cy.login("standard_user", "secret_sauce");
    inventoryPage.AddToCart();
    inventoryPage.clickCartMenu();
    cartPage.asserCartTitle();
    cartPage.clickCheckoutButton();
    checkoutStepOne.assertCheckoutTitle();
    checkoutStepOne.inputFirstName("Test");
    checkoutStepOne.inputLastName("Automation");
    checkoutStepOne.inputPostalCode(12345);
    checkoutStepOne.clickContinue();
    checkoutStepTwo.assertCheckoutTitle();
    checkoutStepTwo.clickFinish();
    checkoutComplete.assertCheckoutTitle();
    checkoutComplete.assertMessage();
    checkoutComplete.clickBackHome();
    inventoryPage.assertInventoryTitle();
  });

  it("Access check out complete page without login", () => {
    checkoutComplete.visit();
    checkoutComplete.assertErrorMessage();
  });
});
