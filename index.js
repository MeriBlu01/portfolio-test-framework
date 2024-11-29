const fs = require("fs");
const reporter = require("cucumber-html-reporter");

// Ensure the 'reports' directory exists
if (!fs.existsSync("./reports")) {
  fs.mkdirSync("./reports");
}

// Verify if JSON report file exists
const jsonReportPath = "./reports/cucumber_json_report.json";
if (!fs.existsSync(jsonReportPath)) {
  console.error(`Error: JSON report file not found at ${jsonReportPath}`);
  process.exit(1); // Exit the process if the JSON report does not exist
}

const options = {
  theme: "bootstrap",
  jsonFile: jsonReportPath,
  output: "./reports/cucumber_html_report.html",
  screenshotsDirectory: "./reports/screenshots/",
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    Browser: "Chrome 54.0.2840.98",
    Platform: "Windows 10",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
  failedSummaryReport: true,
};

reporter.generate(options);

//more info on `metadata` is available in `options` section below.

//to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.
