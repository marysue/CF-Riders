'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductType = sequelize.define('ProductType', {
    type: DataTypes.STRING
  }, {});
  ProductType.associate = function(models) {
    // associations can be defined here
    ProductType.hasMany(models.Inventory, {foreignKey: 'productType_FK'});
  };
  return ProductType;
};
