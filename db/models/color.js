'use strict';
module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define('Color', {
    color: DataTypes.STRING
  }, {});
  Color.associate = function(models) {
    // associations can be defined here
    Color.hasMany(models.Inventory, {foreignKey: 'color_FK'})
  };
  return Color;
};
