import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TrelloAPI from "../../pages/TrelloAPI";
import Ajv from "ajv";
import trelloSchema from "../../fixtures/schema/trelloSchema.json";

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
  cy.log(`Nome na lista: ${response.body.data.list.name}`);
});

Then("validação do contrato", () => {
  const ajv = new Ajv();
  const valid = ajv.validate(trelloSchema, response.body);

  expect(valid).to.be.true;
});