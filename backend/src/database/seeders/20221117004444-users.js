'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
    [
      {
        username: 'bartsimpson',
        password: 'ad9b422b35eff8c9915c7bcabe41d4ee', // B00bs!69
      },
      {
        username: 'hommersimpson',
        password: 'b1f3aa181d111a2e2f5d1e1c251e6a5a', // p0rcoAr@anha
      },
      {
        username: 'brucewayne',
        password: '4bb0e365d29cb6267d337be6c81eba1f', // i'mBatman001
      },
      {
        username: 'tonystark',
        password: '112c966efe39686e5d653e7891c09288', // Ir0nman!
      },
      {
        username: 'peterparker',
        password: '8a44df0a7b7cf6e9030a1be78cac87ae', // PeterSp1der!
      },
    ], { });
  },

  async down (queryInterface) { queryInterface.bulkDelete('Users', null, {}) }
};