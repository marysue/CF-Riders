'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    mfgId_FK: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING,
    photoURL: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      foreignKey: 'productId_FK',
      through: 'OrderProducts',
      otherKey: 'orderId_FK'
    };
    Product.belongsToMany(models.Order, columnMapping);
    Product.hasMany(models.Inventory, {foreignKey: 'productId_FK'});
    Product.belongsTo(models.Mfg, {foreignKey: 'mfgId_FK'});
    Product.hasMany(models.ReviewRating, {foreignKey: 'productId_FK'});
  };
  return Product;

}
