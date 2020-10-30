'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ClothingDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sex: {
        type: Sequelize.ENUM('M', 'F')
      },
      size: {
        type: Sequelize.ENUM('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL')
      },
      productId_FK: {
        type: Sequelize.INTEGER,
        references: { model: 'Products'}
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
    return queryInterface.dropTable('ClothingDetails');
  }
};
