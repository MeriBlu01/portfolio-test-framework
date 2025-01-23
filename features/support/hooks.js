const { Before, After } = require("@cucumber/cucumber");
const Browser = require("../../drivers/chromeDriver");
const { faker } = require('@faker-js/faker');
// const fs = require('fs');
// const path = require('path');

// Set the default timeout for all steps to 60 seconds
//setDefaultTimeout(60 * 1000);

Before({ timeout: 30000 }, async function () {
  // Initialize Driver
  this.driver = await Browser.getDriver();
  this.faker = faker;
});

After({ timeout: 10000 }, async function () {
  // Quit the Driver
  await Browser.quitDriver();
});
