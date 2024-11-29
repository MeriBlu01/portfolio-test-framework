const { Given, When, Then } = require("@cucumber/cucumber");
const { spec, expect } =  require("pactum");
require("dotenv").config();

let response;

console.log("PR test\n");
Given("a GET request is made to endpoint {string}", { timeout: 10000 }, async function (endpoint) {
  try {
    response = await spec().get(endpoint);

  } catch (error) {
    console.error("\nError in step definition:\n", error);
    throw error;
  }
});

When("a response is received with {int} status code", async function (code) {
  try {
    expect(response).to.have.status(code);

  } catch (error) {
    console.error("\nError in step definition:\n", error);
    throw error;
  }
});

Then("it should return a valid HTML response with {string} charset", function (charset) {
  try {
    expect(response).to.have.headerContains('content-type', 'text/html');
    expect(response).to.have.headerContains('content-type', `charset=${charset}`);
    expect(response).to.have.bodyContains("<html>");

  } catch (error) {
    console.error("\nError in step definition:\n", error);
    throw error;
  }
});
