Feature: Consulta SQL

  Scenario: Validar consulta ao banco de dados

    When realizo uma consulta SQL
    Then os dados do usuário devem ser retornados