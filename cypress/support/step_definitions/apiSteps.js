import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TrelloAPI from "../../pages/TrelloAPI";

let response;

When("enviar uma requisição GET para API do Trello", () => {
  TrelloAPI.consultarAction()
    .then((res) => {
      response = res;
    });

});

Then("o status code deve ser 200", () => {
  expect(response.status).to.equal(200);

});

Then("exibir o campo list.name", () => {
  expect(response.body.data.list.name)
    .to.be.a("string");
  cy.log(`Nome da lista: ${response.body.data.list.name}`);

});