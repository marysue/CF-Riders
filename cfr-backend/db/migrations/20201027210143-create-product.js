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
      mfgId_FK: {
        type: Sequelize.INTEGER,
        references: {model: 'Mfgs'}
      },
      name: {
        type: Sequelize.STRING(100)
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT(5,2)
      },
      description: {
        type: Sequelize.TEXT
      },
      productTypeEnum: {
        type: Sequelize.ENUM('Bicycles', 'Clothing', 'Accessories')
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
