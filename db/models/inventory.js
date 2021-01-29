'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    frameId_FK: DataTypes.INTEGER,
    productId_FK: DataTypes.INTEGER,
    size_FK: DataTypes.INTEGER,
    color_FK: DataTypes.INTEGER,
    gender_FK: DataTypes.INTEGER,
    productType_FK: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  Inventory.associate = function(models) {
    // associations can be defined here
    Inventory.belongsTo(models.Product, {foreignKey: 'productId_FK'});
    Inventory.belongsTo(models.Frame, {foreignKey: 'frameId_FK'});
    Inventory.belongsTo(models.Size, {foreignKey: 'size_FK'});
    Inventory.belongsTo(models.Color, {foreignKey: 'color_FK'});
    Inventory.belongsTo(models.Gender, {foreignKey: 'gender_FK'});
    Inventory.belongsTo(models.ProductType, {foreignKey: 'productType_FK'});
  };
  return Inventory;
};
