const fs = require("fs");
const reportPath = "reports/cucumber_json_report.json";

// Ensure the 'reports' directory exists
const reportsDir = "reports";
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

module.exports = {
  default: {
    require: [
      "features/support/hooks.js", // Path to setup and World configuration
      "features/step_definitions/**/*.js", // Path to all step definitions
    ],
    format: [`json:${reportPath}`], // JSON report format json:reports/cucumber_json_report.json
    //retry: 2 // Number of retries for failed scenarios
  },
};
