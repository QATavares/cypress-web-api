# cypress-web-api
Projeto de automação de testes Web e API desenvolvido utilizando Cypress, JavaScript e Cucumber (BDD).

# Pré-requisitos
Antes de executar o projeto, necessário possuir instalado: 
 - Node.js (v.18 ou superior)
 - NPM

# Instalação do projeto

Clonar o repositório:

` git clone <url-do-repositorio> `

Acesse a pasta do projeto:

`cd nome-do-projeto`

Instale as dependências:

`npm install`

# Instruções para execução

### Executar com interface do Cypress
`npx cypress open`

### Executar apenas WEB
`npx cypress run --spec "cypress/e2e/web/**/*.feature"`

### Executar apenas API
`npx cypress run --spec "cypress/e2e/api/**/*.feature"`

## Relatórios
Executar:
`npx cypress run`

Após a execução dos testes, os relatórios são gerados automaticamente.

# Cenários automatizados

### cenários WEB
- Login
    - Login com sucesso
    - Login com email inválido
    - Login com senha inválida
- Carrinho
    - Buscar produto com sucesso
    - Adicionar o produto no carrinho
    - Validar produto na tela de pagamento

### cenários API
- Requests Api
    - Enviar um GET para API
    - Exibir o conteúdo do campo “name” da estrutura “list”.
    - Validar o status code da resposta do serviço.

### Validações Complementares

Além dos requisitos principais, foram implementadas:

- Validação de contrato da API utilizando AJV.
- Simulação de consulta SQL utilizando Cypress Task (cy.task), demonstrando integração entre testes automatizados e banco de dados.
