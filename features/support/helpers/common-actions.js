const { By } = require("selenium-webdriver");

class Action {
  // Methods that involve working with input elements
  async typeData(selector, data) {
    await selector.clear();
    await selector.click();
    await selector.sendKeys(data);
  }

  async clearInputs(elements) {
    for (const element of elements) {
      await element.clear();
    }
  }

  async clickReCaptcha(iFrameTitle, checkMarkClass) {
    // Move to the element
    //const footer = await global.driver.findElement(By.xpath('(//footer)[1]')); .scroll(0, 0, 0, 0, footer)

    await this.driver.actions().scroll(0, 0, 200, 0).perform();
    //await global.driver.executeScript('window.scrollBy(0, -)');

    // Wait for the iframe to load and switch to it using its `title` attribute
    const iframe = await this.driver.findElement(By.css(iFrameTitle));
    await this.driver.switchTo().frame(iframe);

    // Wait for the checkbox to be present and clickable, then click it
    const reCaptchaCheckbox = await this.driver.findElement(
      By.css(checkMarkClass),
    );
    await reCaptchaCheckbox.click();

    // Wait until the checkbox becomes hidden, indicating that reCAPTCHA is checked
    //await global.driver.elementIsNotVisible(reCaptchaCheckbox);

    let isReCaptchaChecked = false;
    while (!isReCaptchaChecked) {
      try {
        // If the element is visible, it will throw an error, so this will retry until the style becomes "display: none"
        isReCaptchaChecked =
          (await reCaptchaCheckbox.getCssValue("display")) === "none";
      } catch (error) {
        // If an error is thrown, it means the element is likely hidden, so we break out of the loop
        isReCaptchaChecked = true;
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 500)); // Wait a bit before checking again (500ms)
    }

    // Switch back to the main document after clicking
    await this.driver.switchTo().defaultContent();
    // Switches to the iframe by name or index
    //await global.driver.switchTo().frame(iFrameName); // Replace with frame(0) if iFrameName isn’t needed

    // Wait for the reCAPTCHA checkbox to be located and visible
    //const checkMark = await global.driver.wait(until.elementLocated(By.css(checkMarkClass)), 5000);
    //await global.driver.wait(until.elementIsVisible(checkMark), 5000);
    //await( await global.driver.findElement(By.css(checkMarkClass))).click();
    // Click the reCAPTCHA checkbox
    //await checkMark.click();
  }

  // Workflow Support Methods
  async delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

module.exports = new Action();
