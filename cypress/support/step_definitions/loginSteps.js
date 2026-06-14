import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

let user;

before(() => {
  cy.fixture("users").then((data) => {
    user = data;
  });
});

Given("que o usuário acessa a página de login", () => {
  LoginPage.acessarLogin();
});

When("informa email e senha válidos", () => {
  LoginPage.preencherEmail(user.email);
  LoginPage.preencherSenha(user.password);
});

When("clica no botão de login", () => {
  LoginPage.clicarLogin();
});

Then("deve visualizar a área logada da aplicação", () => {
  LoginPage.validarLoginComSucesso(user.name);
});

When("informa o email {string}", (email) => {
  LoginPage.preencherEmail(email);
});

When("informa a senha {string}", (senha) => {
  LoginPage.preencherSenha(senha);
});

Then("deve visualizar {string}", (resultado) => {
  cy.contains(resultado).should("be.visible");
});
