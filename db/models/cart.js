'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    quantity: DataTypes.INTEGER,
    userId_FK: DataTypes.INTEGER,
    inventoryId_FK: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.User, { foreignKey: 'userId_FK' })
    Cart.belongsTo(models.Inventory, {foreignKey: 'inventoryId_FK'});
  };
  return Cart;
};
