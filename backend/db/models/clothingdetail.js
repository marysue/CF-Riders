'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClothingDetail = sequelize.define('ClothingDetail', {
    sex: DataTypes.ENUM('M','F'),
    size: DataTypes.ENUM('XS','S','M','L','XL','XXL','XXXL'),
    productId_FK: DataTypes.INTEGER
  }, {});
  ClothingDetail.associate = function(models) {
    // associations can be defined here
   ClothingDetail.belongsTo(models.Product, { foreignKey: "productId_FK" });
  };
  return ClothingDetail;
};
