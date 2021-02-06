'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReviewRating = sequelize.define('ReviewRating', {
    userId_FK: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId_FK: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  ReviewRating.associate = function(models) {
    // associations can be defined here
    ReviewRating.belongsTo(models.User, {foreignKey: 'userId_FK'});
    ReviewRating.belongsTo(models.Product, {foreignKey: 'productId_FK'});
  };
  return ReviewRating;
};
