'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addIndex('user_session', 
      [{
        attribute: "user_id"
      }],
      {
        unique: false,
        name: "user_session_user_id"
      }
    );
    await queryInterface.addIndex('user_session', 
      [{
        attribute: "country"
      }],
      {
        unique: false,
        name: "user_session_country"
      }
    );
    await queryInterface.addIndex('user_session', 
      [{
        attribute: "gender"
      }],
      {
        unique: false,
        name: "user_session_gender"
      }
    );
    await queryInterface.addIndex('user_session', 
      [{
        attribute: "device"
      }],
      {
        unique: false,
        name: "user_session_device"
      }
    );
  }
};
