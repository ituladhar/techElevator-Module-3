const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 100,
  screenshotOnRunFailure: false,
  video: false,
  reporter: 'cypress/reporters/te-reporter',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
