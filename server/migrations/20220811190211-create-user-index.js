'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addIndex('users', 
    [{
      attribute: "username"
    }],
    {
      unique: true,
      name: "users_username_index"
    }
    );
    await queryInterface.addIndex('users', 
    [{
      attribute: "country"
    }],
    {
      unique: false,
      name: "users_country_index"
    }
    );
    await queryInterface.addIndex('users', 
    [{
      attribute: "gender"
    }],
    {
      unique: false,
      name: "users_gender_index"
    }
    );
  }
};