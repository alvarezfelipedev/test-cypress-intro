const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://example.cypress.io',
  },
  env: {
    ejemplo_url: 'https://example.cypress.io',
  },

});
