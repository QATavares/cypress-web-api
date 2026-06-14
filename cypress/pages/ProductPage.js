class ProductPage {

  acessarProdutos() {
    cy.contains('Products').click();
  }

  buscarProduto(produto) {
    cy.get('#search_product').type(produto);
    cy.get('#submit_search').click();
  }

  validarResultadoBusca(produto) {
    cy.contains(produto).should('be.visible');
  }

  adicionarAoCarrinho() {
    cy.get('.choose > .nav > li > a').contains('View Product').click({ force: true });
    cy.get('button[type="button"]').contains(' Add to cart ').click();
  }

  acessarCarrinho() {
  cy.contains('View Cart').should('be.visible').click();  
}

  validarProdutoCarrinho(produto) {
    cy.contains(produto).should('be.visible');
  }

  prosseguirCheckout() {
    cy.get('.shop-menu > .nav > li > a').contains(' Cart').click();
  }

}

export default new ProductPage();

