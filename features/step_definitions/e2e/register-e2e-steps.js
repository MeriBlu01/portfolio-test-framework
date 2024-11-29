require("dotenv").config();
//const { faker } = require("@faker-js/faker");
const { When } = require("@cucumber/cucumber");
const LoginPage = require("../../page_objects/login-selectors");
//const Action = require("../../support/helpers/common-actions");
//const { validateElementText } = require("../../support/helpers/common-asserts");
//const urls = require("../../support/navigation");
//const { By } = require("selenium-webdriver");
const { screenShotError } = require("../../support/helpers/utils");

let loginPage;


When("user clicks on Create a new account link", { timeout: 10000 }, async function () {
  try {
    loginPage = new LoginPage(this.driver);
    await (await loginPage.getLinkCreateANewAccount()).click();
  } catch (error) {
    console.error("\nError in step definition:\n", error);
    return screenShotError(this.driver, error, this);
  }
});