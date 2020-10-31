'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    mfgId_FK: DataTypes.INTEGER,
    name: DataTypes.STRING(100),
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(5,2),
    description: DataTypes.TEXT,
    productTypeEnum: DataTypes.ENUM('Bicycles','Clothing','Accessories'),
    photoURL: DataTypes.STRING(200)
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    //belongsTo goes on the table WITHOUT the foreign key
    Product.belongsTo(models.Mfg, { foreignKey: 'mfgId_FK'})
    //hasOne goes on the table WITH the foreign key
    Product.hasOne(models.BicycleDetail, { foreignKey: "productId_FK"});
    //hasMany uses the FK from the other table
    Product.hasMany(models.ReviewRating, { foreignKey: "productId_FK" });
    //hasOne
    Product.hasOne(models.ClothingDetail, { foreignKey: "productId_FK" });
  };
  return Product;
};
