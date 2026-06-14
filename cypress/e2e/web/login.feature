Feature: Login

Scenario: Realizar login com sucesso
  Given que o usuário acessa a página de login
  When informa email e senha válidos
  And clica no botão de login
  Then deve visualizar a área logada da aplicação

Scenario Outline: Validar login

  Given que o usuário acessa a página de login
  When informa o email "<email>"
  And informa a senha "<senha>"
  And clica no botão de login
  Then deve visualizar "<resultado>"

Examples:
  | email                 | senha          | resultado                           |
  | teste@teste.com.br    | senhaErrada    | Your email or password is incorrect |
  | test@teste.com.br     | teste@123      | Your email or password is incorrect |