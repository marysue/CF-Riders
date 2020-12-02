'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ReviewRatings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId_FK: {
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      productId_FK: {
        type: Sequelize.INTEGER,
        references: {model: 'Products'}
      },
      review: {
        type: Sequelize.TEXT
      },
      reviewRating: {
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
    return queryInterface.dropTable('ReviewRatings');
  }
};
