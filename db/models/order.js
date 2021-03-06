'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId_FK: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      foreignKey: 'orderId_FK',
      through: 'OrderProducts',
      otherKey: 'productId_FK'
    }
    Order.belongsToMany(models.Product, columnMapping);
    Order.belongsTo(models.User, {foreignKey: 'userId_FK'});

  };
  return Order;
};
