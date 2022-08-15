'use strict';
const faker =  require("faker");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
    */

    let data = [];
    for(let i = 0; i < 10; i++) {
      const seedData = {
        fullName: faker.name.firstName(),
        username: faker.random.alphaNumeric(10),
        password: "$2a$10$rcrTJCzUl05ecm0Zyo3dgOPO616LX5gvNPW13u78LpCJPBigCsAIS", //password
        gender: faker.name.gender(),
        country: faker.address.country(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      data.push(seedData);
    }

    await queryInterface.bulkInsert('users', data);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
