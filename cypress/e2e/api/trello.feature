Feature: Consulta API Trello

Scenario: Get api/trello

    When enviar uma requisição GET para API do Trello
    Then o status code deve ser 200
    Then exibir o campo list.name