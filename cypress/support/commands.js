import LoginPage from "../pages/LoginPage";

Cypress.Commands.add('login', (email, password) => {
  LoginPage.acessarLogin();
  LoginPage.preencherEmail(email);
  LoginPage.preencherSenha(password);
  LoginPage.clicarLogin();
  cy.wait(5000)
});