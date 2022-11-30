const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'API Cash Transactions',
      description: `API para gerenciar contas e transações bancárias. \n
        API com autenticação JWT. \n
          - Para acessar rotas protegidas, fazer o login e usar o Token gerado. \n
          - Cada usuário tem um token único, portanto só pode acessar a própria conta, e as transações que ele participou.`,
      version: '1.0.0',
    },
    servers: [{
      url: 'http://localhost:3001',
      description: 'servidor local',
    }],
    components: {
      securitySchemes: {
        apiKey: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
    },
  },
  apis: [
    './src/routes/Account.ts',
    './src/routes/Transactions.ts',
    './src/routes/User.ts',
  ],
};

export default swaggerConfig;
