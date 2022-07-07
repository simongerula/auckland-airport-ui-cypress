const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  },
  screenshotOnRunFailure: true,
  reporter:"cypress-mochawesome-reporter",
  reporterOptions: {
    "reportDir": "cypress/report",
    "charts": true,
    "embeddedScreenshots": true,
    "saveHTML": true
  }
});