// browser invocation generalization
const { Builder } = require("selenium-webdriver");
const Chrome = require("selenium-webdriver/chrome"); // Import Chrome options

let driver;

module.exports = {
  getDriver: async function () {
    // Add the headless argument
    //options.addArguments('--headless=new'); // Set headless mode if specified
    if (!driver) {
      const options = new Chrome.Options(); // Initialize Chrome options

      // Add the headless argument
      options.addArguments("--headless=new");
      // WebDriver waits until the load event fire is returned.
      options.setPageLoadStrategy("normal"); // eager

      driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options) // Use the Chrome options
        .build();

      driver.manage().window().maximize();
      driver.manage().setTimeouts({ implicit: 60000 }); // Set implicit wait timeout
    }
    return driver;
  },

  quitDriver: async function () {
    if (driver) {
      await driver.quit();
      driver = null;
    }
  },
};
