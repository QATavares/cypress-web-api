class LoginPage {

  acessarLogin() {
    cy.visit('https://www.automationexercise.com/login');
  }

  preencherEmail(email) {
    cy.get('[data-qa="login-email"]').type(email);
  }

  preencherSenha(senha) {
    cy.get('[data-qa="login-password"]').type(senha);
  }

  clicarLogin() {
    cy.contains('button', 'Login').click();
  }

  validarLoginComSucesso(name) {
    cy.contains(`Logged in as ${name}`).should('be.visible');  
  }
}

export default new LoginPage();
