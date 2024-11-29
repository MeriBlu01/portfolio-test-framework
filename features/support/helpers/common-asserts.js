// const { expect } = require('chai');
// chai dynamic import()
let expect;
(async () => {
  expect = (await import("chai")).expect;
})();

// Assertion Methods

module.exports.validateElementText = async (element, expectedText) => {
  try {
    const errorMessageText = await element.getText();
    expect(errorMessageText).to.equal(expectedText); // Assert that the text is as expected
  } catch (error) {
    console.error("\nError in validateElementText function:\n", error);
    throw error;
  }
};
