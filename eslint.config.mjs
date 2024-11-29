import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // If using ES modules, otherwise use "commonjs"
      globals: {
        ...globals.node, // enable Node.js specific rules (recommended)
        ...globals.browser, // For Selenium/WebDriver browser globals
      },
    },
  },
  {
    files: ["**/*.js"],
    rules: {
      "no-unused-expressions": "off", // Often used in tests with Chai's expect syntax
      "no-undef": "off", // Prevents issues with Cucumber's global step definitions
      "no-console": "off", // Console logs are common in tests for debugging
      "max-len": ["warn", { code: 250 }], // Allows longer lines in test definitions
      "max-nested-callbacks": "error", // Prevents callback hell!
      "no-return-await": "error",
    },
  },
  pluginJs.configs.recommended,
];