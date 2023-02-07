# Cash Transactions


Cash transactions é uma "wallet" de transações bancárias.</br>
O foco do projeto é o **backend**.</br>
Ele foi desenvolvido em Node.Js com Typescript, banco de dados relacional PostgreSQL, com Express.js e o ORM Sequelize. Possui autenticação com JWT e encriptação de senha com MD5.</br>
Para usar a aplicação, basta o usuário logar com uma conta já existente `(usuário: hommersimpson - senha: p0rcoAr@anha)`, ou criar uma nova conta.
Depois de logado, é possível consultar o saldo, olhar o extrato, filtrar por pagamentos feitos ou recebidos e realizar uma nova transação de transaferência entre contas.</br>

<img src="/public/images/mobile.gif" width="300px"/>

## Inicialização via Docker 🐳

1. Clone o repositório `git@github.com:trkotovicz/cash-transactions.git`
2. Na raíz do repositório rode o comando `docker-compose up`, aguarde a alicação subir (esse passo pode demorar um pouco).
3. Acesse o navegador no endereço `http://localhost:3000` ou `http://localhost:3001/docs/#/` para testar a API.
4. Para encerrar a aplicação, rode o comando `docker-compose down`.

## Inicialização local 🖥

1. Clone o repositório `git@github.com:trkotovicz/cash-transactions.git`
2. Na raíz do repositório rode o comando `npm start`
3. Acesse o navegador no endereço `http://localhost:3000` ou `http://localhost:3001/docs/#/` para testar a API.
4. Para encerrar a aplicação, rode o comando `npm run kill:all`.


# API

Com a aplicação rodando acesse a documentação da API em http://localhost:3001/docs/#/ </br>

---

Projeto desenvolvido por [Thais R Kotovicz](https://www.linkedin.com/in/thaiskotovicz/).
</br>
