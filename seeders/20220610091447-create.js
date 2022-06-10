'use strict';
const db = require('../models/index')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Accounts', 
    [{
      accountId: 9999,
      username: 'khatuantran',
      password: 'passwordhash',
      state: 'activated',
      type: 'owner',
      verifyString: 'ABCXYZ'
    }]);

    await queryInterface.bulkInsert('StoreOwners', 
    [{
      ownerId: 9999,
      accountId: 9999,
      name: 'Trần Tuấn Kha',
      email: 'example@example.com',
    }]);

    await queryInterface.bulkInsert('Stores', 
    [{
      storeId: 9998,
      ownerId: 9999,
      name: 'DienMayXanh',
      phoneNumber: '0380380338',
      address: 'HCMC'
    },
    {
      storeId: 9999,
      ownerId: 9999,
      name: 'DienMayChoLon',
      phoneNumber: '012356865',
      address: 'HN'
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
