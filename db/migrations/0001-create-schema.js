'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createSchema("pagamentos")
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropSchema('pagamentos');
  }
};