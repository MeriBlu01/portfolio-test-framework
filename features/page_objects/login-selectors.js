// const { By, Key, until } = require('selenium-webdriver');
const { By } = require("selenium-webdriver");
const Base = require("./base");

class LoginPage extends Base {
  /* constructor(driver) {
        super(driver); // Pass the driver to the parent `Base` class
        //this.driver = driver
    } */

  async getInputEmail() {
    return this.driver.findElement(By.id("user[email]"));
  }

  async getInputPassword() {
    return this.driver.findElement(By.id("user[password]"));
  }

  async getLinkCreateANewAccount() {
    //await global.driver.wait(until.elementLocated(By.css('#newUser')), 5000);
    return this.driver.findElement(By.css("a[href='/users/sign_up']"));
  }

  async getCheckBoxRememberMe() {
    return this.driver.findElement(By.id("user[remember_me]"));
  }

  async getButtonSignIn() {
    return this.driver.findElement(By.css("button[type='submit']"));
  }

  async getLinkSignIn() {
    return this.driver.findElement(By.css("a[href='/users/sign_in']"));
  }

  async getLinkForgetPassword() {
    return this.driver.findElement(By.className(".form__forgot-password"));
  }

  async getPageHeading() {
    return this.driver.findElement(By.className(".page__heading"));
  }

  async getSignUpOptionLinkedin() {
    return this.driver.findElement(By.css("a[aria-label='linkedin']"));
  }

  async getSignUpOptionFaceBook() {
    return this.driver.findElement(By.css("a[aria-label='facebook']"));
  }

  async getSignUpOptionGoogle() {
    return this.driver.findElement(By.css("a[aria-label='google']"));
  }
}

module.exports = LoginPage;
