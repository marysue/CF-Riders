'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReviewRating = sequelize.define('ReviewRating', {
    userId_FK: DataTypes.INTEGER,
    productId_FK: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    reviewRating: DataTypes.INTEGER,
  }, {});
  ReviewRating.associate = function(models) {
    // associations can be defined here
  };
  return ReviewRating;
};
