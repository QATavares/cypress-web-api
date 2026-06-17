import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { QUERY_USER } from "../../database/queries";
let result;

When("realizo uma consulta SQL", () => {
    cy.task(
        "execQuery",
        "SELECT * FROM users WHERE id = 1"
    ).then((res) => {
        resul = res;
        cy.log(JSON.stringify(res));
    });
});

Then("os dados do usuário devem ser retornados", () => {
    expect(resul).to.have.length(1);
    expect(resul[0]).to.deep.equal({
        id: 1,
        nome: "Rodrigo",
        email: "teste@teste.com.br"
    });
});