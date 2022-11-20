'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transactions',
    [
      {
        value: 1000,
        debitedAccountId: 4,
        creditedAccountId: 5,
      },
      {
        value: 300.40,
        debitedAccountId: 3,
        creditedAccountId: 2,
      },
      {
        value: 15000.00,
        debitedAccountId: 4,
        creditedAccountId: 3,
      },
      {
        value: 77.79,
        debitedAccountId: 1,
        creditedAccountId: 5,
      },
      {
        value: 99.00,
        debitedAccountId: 4,
        creditedAccountId: 2,
      },
      {
        value: 250.71,
        debitedAccountId: 3,
        creditedAccountId: 1,
      },
      {
        value: 7000.00,
        debitedAccountId: 3,
        creditedAccountId: 4,
      },
    ], { });
  },

  async down (queryInterface) { queryInterface.bulkDelete('transactions', null, {}) }
};
