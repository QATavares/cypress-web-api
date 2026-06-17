const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    charts: true,
    reportPageTitle: "Relatório de Automação",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    specPattern: "cypress/e2e/**/*.feature",

    async setupNodeEvents(on, config) {
      // Cucumber
      await addCucumberPreprocessorPlugin(on, config);
      //SQL
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      on("task", {
        execQuery(query) {
          console.log(`Query executando: ${query}`);
          const users = [
            {
              id: 1,
              nome: "Rodrigo",
              email: "teste@teste.com.br"
            }
          ];
          return users;
        }
      })
      // Mochawesome Reporter
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
  },
});