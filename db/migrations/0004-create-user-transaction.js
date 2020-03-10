'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserTransactions', {
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
        transactionId: {
          allowNull: false,
          type: Sequelize.STRING
        },
        planId: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        amount: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        method: {
          allowNull: false,
          type: Sequelize.STRING
        },
        status: {
          allowNull: false,
          type: Sequelize.STRING
        },
        paymentStatus: {
          allowNull: false,
          type: Sequelize.STRING
        },
        data: {
          allowNull: false,
          type: Sequelize.JSON
        },
        endDate: {
          allowNull: false,
          type: Sequelize.DATE
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
    return queryInterface.dropTable('UserTransactions',
      {
        schema: 'pagamentos'
      });
  }
};