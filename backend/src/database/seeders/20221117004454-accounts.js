'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('accounts',
    [
      {
        id: 1,
        balance: 7.89,
      },
      {
        id: 2,
        balance: 2300.47
      },
      {
        id: 3,
        balance: 7777777777.77,
      },
      {
        id: 4,
        balance: 9999999999.99,
      },
      {
        id: 5,
        balance: 1450.54,
      },
    ], { });
  },

  async down (queryInterface) { queryInterface.bulkDelete('accounts', null, {}) }
};