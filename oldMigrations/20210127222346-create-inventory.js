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
      productId_FK: {
        type: Sequelize.INTEGER,
        references: {model: "Products"}
      },
      frameId_FK: {
        type: Sequelize.INTEGER,
        references: {model: "Frames"}
      },
      sizeId_FK: {
        type: Sequelize.INTEGER,
        references: {model: "Sizes"}
      },
      colorId_FK: {
        type: Sequelize.INTEGER,
        references: {model: "Colors"}
      },
      genderId_FK: {
        type: Sequelize.INTEGER,
        references: {model: "Gender"}
      },
      productType_FK: {
        type: Sequelize.INTEGER,
        references: {model: "ProductTypes"},
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
