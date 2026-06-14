import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import ProductPage from "../../pages/ProductPage";

let user;

before(() => {
  cy.fixture("users").then((data) => {
    user = data;
  });
});

Given("que o usuário está autenticado", () => {
  cy.login(user.email, user.password);
  LoginPage.validarLoginComSucesso(user.name);
});

When("realiza a busca pelo produto {string}", (produto) => {
  ProductPage.acessarProdutos();
  ProductPage.buscarProduto(produto);
});

Then("o produto {string} deve ser exibido nos resultados", (produto) => {
  ProductPage.validarResultadoBusca(produto);
});

When("adiciona o produto ao carrinho", () => {
  ProductPage.adicionarAoCarrinho();
});

When("acessa o carrinho de compras", () => {
  ProductPage.acessarCarrinho();
});

Then("o produto {string} deve ser exibido no carrinho", (produto) => {
  ProductPage.validarProdutoCarrinho(produto);
});

When("acessa a tela de checkout", () => {
  ProductPage.prosseguirCheckout();
});

Then("deve visualizar o produto {string}", (produto) => {
  cy.contains(produto).should("be.visible");
});

Then("deve visualizar a quantidade correta", () => {
  cy.get('.cart_quantity').should('contain.text', '1');
});

Then("deve visualizar o valor correto", () => {
  cy.get('.cart_total_price').should('be.visible');

});