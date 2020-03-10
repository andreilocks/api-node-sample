'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTransaction = sequelize.define('UserTransaction', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      transactionId: {
        allowNull: false,
        type: DataTypes.STRING
      },
      planId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      paymentStatus: {
        type: DataTypes.STRING
      },
      method: {
        allowNull: false,
        type: DataTypes.STRING
      },
      data: {
        allowNull: false,
        type: DataTypes.JSON
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING
      },
      endDate: {
        allowNull: false,
        type: DataTypes.DATE
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      schema: 'pagamentos'
    });

  UserTransaction.paymentStatusENUMS = {
    SEM_PAGAMENTO: "SEM_PAGAMENTO",
    EM_ABERTO: "EM_ABERTO",
    PROCESSANDO: "PROCESSANDO",
    PAGO: "PAGO",
    LIBERADO: "LIBERADO",
    CANCELADO: "CANCELADO",
    ERRO: "ERRO"
  };

  return UserTransaction;
};