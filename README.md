# Cash Transactions


Projeto desenvolvido para o desafio técnico da NG Cash.</br>
Trata-se de um site de banco. Onde o cliente pode logar, criar uma nova conta, consultar o saldo, olhar o extrato, filtrar por pagamentos feitos e recebidos e realizar uma nova transação de transaferência entre contas.</br>
Ele foi desenvolvido em Typescript, utilizando React.Js para o frontend e, Node.Js, o banco de dados PostgreSQL, com Express e o ORM Sequelize, no backend. Possui autenticação com JTW e encriptação de senha com MD5.</br>

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

</br>
Acesse a documentação da API em `http://localhost:3001/docs/#/`.
</br>

---

Projeto desenvolvido por [Thais R Kotovicz](https://www.linkedin.com/in/thaiskotovicz/).
</br>
