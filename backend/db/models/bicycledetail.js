'use strict';
module.exports = (sequelize, DataTypes) => {
  const BicycleDetail = sequelize.define('BicycleDetail', {
    size: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    frame: DataTypes.STRING(60),
    productId_FK: DataTypes.INTEGER
  }, {});
  BicycleDetail.associate = function(models) {
    // associations can be defined here
    //belongsTo goes on the table WITHOUT the foreignKey.
    BicycleDetail.belongsTo(models.Product, {foreignKey: "productId_FK"});
  };
  return BicycleDetail;
};
