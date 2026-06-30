const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // No global base URLs or redirects are allowed here
    baseUrl: null,
  },
});
