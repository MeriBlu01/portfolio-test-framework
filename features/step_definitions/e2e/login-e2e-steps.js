require("dotenv").config();
const { faker } = require("@faker-js/faker");
const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../../page_objects/login-selectors");
const Action = require("../../support/helpers/common-actions");
const { validateElementText } = require("../../support/helpers/common-asserts");
const urls = require("../../support/navigation");
const { By } = require("selenium-webdriver");
const { screenShotError } = require("../../support/helpers/utils");


let loginPage;

// chai dynamic import()
let expect;
(async () => {
  expect = (await import("chai")).expect;
})();

Given("user navigates to login form", { timeout: 10000 }, async function () {
  try{
    loginPage = new LoginPage(this.driver);
    console.log("\nNavigating to:", urls.loginPageUrl);
    await this.driver.get(urls.loginPageUrl);

  } catch (error) {
    console.error("\nNavigation to login page failed: \n", error);
  }
});

When("user clicks on Sign In button", async function () {
  try {
    await (await loginPage.getButtonSignIn()).click();
  } catch (error) {
    console.error("\nError in step definition:\n", error);
    return screenShotError(this.driver, error, this);
  }
});

Then("Remember Me checkbox is already checked", async function () {
  try {
    const rememberMeCheckbox = await loginPage.getCheckBoxRememberMe();
    const isChecked = await rememberMeCheckbox.isSelected();
    expect(isChecked).to.be.true; // Assert that the checkbox is checked
  } catch (error) {
    console.error("\nError in step definition:\n", error);
    return screenShotError(this.driver, error, this);
  }
});

Then("the message {string} is displayed", async function (errorMessage) {
  try {
    // Wait for the element to be located and visible
    const errorMessageElement = await this.driver.findElement(
      By.css(".form-error__list-item"),
    );
    // const isDisplayed = await errorMessageElement.isDisplayed();
    await validateElementText(errorMessageElement, errorMessage);
  } catch (error) {
    console.error("\nError in step definition:\n", error);
    return screenShotError(this.driver, error, this);
  }
});

Then("the page url contains {string}", async function (content) {
  try {
    await Action.delay(500);
    const currentUrl = await this.driver.getCurrentUrl();
    console.log("\ncurrent url: " + currentUrl);
    expect(currentUrl).to.include(content);
  } catch (error) {
    console.error("\nError in step definition:\n", error);
    return screenShotError(this.driver, error, this);
  }
});

When("user enters valid Email credential", async function () {
  try {
    // Wait for email field to be present and then type data
    const emailInput = await loginPage.getInputEmail();
    await Action.typeData(emailInput, process.env.ULTIMATE_EMAIL);
  } catch (error) {
    console.error("\nError in step definition:\n", error);
    return screenShotError(this.driver, error, this);
  }
});

When("user enters invalid Email credential", async function () {
  try {
    // Wait for email field to be present and then type data
    const emailInput = await loginPage.getInputEmail();
    await Action.typeData(emailInput, this.testEmail);
  } catch (error) {
    console.error("\nError in step definition:\n", error);
    return screenShotError(this.driver, error, this);
  }
});

When("user enters valid Password credential", async function () {
  try {
    const passwordInput = await loginPage.getInputPassword();
    await Action.typeData(passwordInput, process.env.ULTIMATE_PASSWORD);
  } catch (error) {
    console.error("\nError in step definition:\n", error);
    return screenShotError(this.driver, error, this);
  }
});

When("user enters invalid Password credential", async function () {
  try {
    const passwordInput = await loginPage.getInputPassword();
    const fakePassword = faker.internet.password({ prefix: "!1AT" });
    await Action.typeData(passwordInput, fakePassword);
  } catch (error) {
    console.error("\nError in step definition:\n", error);
    return screenShotError(this.driver, error, this);
  }
});

When("user clicks on the Login button", async function () {
  try {
    await (await loginPage.getLoginButton()).click(); // Await the method to get the button element
  } catch (error) {
    console.error("\nError in step definition:\n", error);
    return screenShotError(this.driver, error, this);
  }
});

/* Then('user is redirected to dashboard page', async function () {
  const dashboard = new DashboardElements(this.driver);
  try{
    //dashboard = new DashboardPage(driver);
    console.log('Navigating to:', dashboardPageUrl());
    await this.driver.get(dashboardPageUrl());

    const title = await dashboard.getPageTitle();
    console.log("Page Title:", title); // Log the title to see what you get
    expect(title).to.equal('Dashboard'); // Check if the title matches
    console.log("Title matches");

    
  } catch (error) {
    console.error("\nError in step definition:\n", error);
    return screenShotError(this.driver, error, this);
  } 
  
}); */
