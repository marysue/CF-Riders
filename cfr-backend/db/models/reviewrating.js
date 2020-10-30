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
    ReviewRating.hasOne(models.User, { foreignKey: "userId_FK" });
    ReviewRating.hasMany(models.Product, { foreignKey: "productId_FK" });
  };
  return ReviewRating;
};
