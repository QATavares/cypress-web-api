Feature: Carrinho de compras

  Background:
    Given que o usuário está autenticado

  Scenario: Buscar produto com sucesso

    When realiza a busca pelo produto "Blue Top"
    Then o produto "Blue Top" deve ser exibido nos resultados

  Scenario: Adicionar produto ao carrinho

    When realiza a busca pelo produto "Blue Top"
    And adiciona o produto ao carrinho
    And acessa o carrinho de compras
    Then o produto "Blue Top" deve ser exibido no carrinho

  Scenario: Validar produto na tela de pagamento

    When acessa a tela de checkout
    Then deve visualizar o produto "Blue Top"
    And deve visualizar a quantidade correta
    And deve visualizar o valor correto