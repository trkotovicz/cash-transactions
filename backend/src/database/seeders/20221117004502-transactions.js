'use strict';

const { NOW } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transactions',
    [
      {
        value: 1000,
        debitedAccountId: 4,
        creditedAccountId: 5,
        createdAt: NOW()
      },
      {
        value: 300.40,
        debitedAccountId: 3,
        creditedAccountId: 2,
        createdAt: NOW()
      },
      {
        value: 77.79,
        debitedAccountId: 1,
        creditedAccountId: 5,
        createdAt: NOW()
      },
      {
        value: 99.00,
        debitedAccountId: 4,
        creditedAccountId: 2,
        createdAt: NOW()
      },
      {
        value: 250.71,
        debitedAccountId: 3,
        creditedAccountId: 1,
        createdAt: NOW()
      },
    ], { });
  },

  async down (queryInterface) { queryInterface.bulkDelete('Transactions', null, {}) }
};
