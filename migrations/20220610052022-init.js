'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts', {
      accountId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      verifyString: {
        type: Sequelize.STRING
      },
    });
    await queryInterface.createTable('StoreOwners', {
      ownerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: Sequelize.STRING,
      },
      avatarLink: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      accountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Accounts',
          key: 'accountId',
        }
      },
    });

    await queryInterface.createTable('Stores', {
      storeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'StoreOwners',
          key: 'ownerId',
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      logoLink: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
    });

    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};