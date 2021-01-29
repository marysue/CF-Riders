'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      frameId_FK: {
        type: Sequelize.INTEGER,
        references: {model: 'Frames'}
      },
      productId_FK: {
        type: Sequelize.INTEGER,
        references: {model: 'Products'}
      },
      size_FK: {
        type: Sequelize.INTEGER,
        references: {model: 'Sizes'}
      },
      color_FK: {
        type: Sequelize.INTEGER,
        references: {model: 'Colors'}
      },
      gender_FK: {
        type: Sequelize.INTEGER,
        references: {model: 'Genders'}
      },
      productType_FK: {
        type: Sequelize.INTEGER,
        references: {model: 'ProductTypes'}
      },
      quantity: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Inventories');
  }
};
