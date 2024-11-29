const { By } = require("selenium-webdriver");
const Base = require("./base");

class RegisterSelectors extends Base {
  async getInputFirstName() {
    return this.driver.findElement(By.id("user[first_name]"));
  }

  async getInputLastName() {
    return this.driver.findElement(By.id("user[last_name]"));
  }

  async getInputEmail() {
    return this.driver.findElement(By.id("user[email]"));
  }

  async getInputPassword() {
    return this.driver.findElement(By.id("user[password]"));
  }

  async getCheckBoxTerms() {
    return this.driver.findElement(By.id("user[terms]"));
  }

  async getButtonSignUp() {
    return this.driver.findElement(By.css("button[type='submit']"));
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

  async getLinkHaveAnAccountAlready() {
    return this.driver.findElement(
      By.xpath("//a[normalize-space()='I already have an account!']"),
    );
  }

  async getLinkSignIn() {
    return this.driver.findElement(
      By.css("li[class='header__nav-item header__nav-sign-in'] a"),
    );
  }
}

module.exports = RegisterSelectors;
