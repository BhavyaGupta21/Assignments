const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true,
    overwrite: false,
    code: false
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    retires:
    {
      runMode: 0, // If we run the code through CLI, this will define the number of tries for that, if we specify here 4, then the tests will run 4 + 1 = 5 times
      openMode: 0 // If we run tests through open mode, this will defined the number of tries, as in runMode 2 + 1 = 3 times the failed tests will run again
    }
  },
});
