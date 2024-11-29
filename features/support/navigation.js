require("dotenv").config();

const BASE_URL = process.env.ULTIMATE_QA_BASE_URL;
// const getUrl = (path = '') => `${BASE_URL}/${path}`;

module.exports = {
  // loginPageUrl: () => getUrl('login'),
  loginDemoPageUrl: "https://demoqa.com/login",
  registerDemoPageUrl: "https://demoqa.com/register",
  automationMenuPageUrl: `${BASE_URL}/automation`,
  loginPageUrl: `${BASE_URL}/users/sign_in`,
};
