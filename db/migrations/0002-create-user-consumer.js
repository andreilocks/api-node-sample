'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserConsumers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        consumerId: {
          allowNull: false,
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      {
        schema: 'pagamentos'
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserConsumers',
      {
        schema: 'pagamentos'
      });
  }
};