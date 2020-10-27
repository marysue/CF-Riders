'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    mfgId_FK: DataTypes.INTEGER,
    name: DataTypes.STRING(100),
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT(5,2),
    description: DataTypes.TEXT,
    productTypeEnum: DataTypes.ENUM('Bicycles','Clothing','Accessories'),
    photoURL: DataTypes.STRING(200)
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
