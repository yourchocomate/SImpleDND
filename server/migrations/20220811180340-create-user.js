'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING(64),
      },
      username: {
        type: Sequelize.STRING(64),
        unique: true
      },
      password: {
        type: Sequelize.STRING(255),
      },
      gender: {
        type: Sequelize.STRING(64)
      },
      country: {
        type: Sequelize.STRING(64)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};