'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderProduct_FK: {
        type: Sequelize.INTEGER,
        references: {model: 'OrderProduct'},
      },
      mfgId_FK: {
        type: Sequelize.INTEGER,
        references: {model: 'Mfgs'}
      },
      name: {
        type: Sequelize.STRING(100)
      },
      price: {
        type: Sequelize.FLOAT(5,2)
      },
      description: {
        type: Sequelize.TEXT
      },
      photoURL: {
        type: Sequelize.STRING(200)
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};
