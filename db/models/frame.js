'use strict';
module.exports = (sequelize, DataTypes) => {
  const Frame = sequelize.define('Frame', {
    type: DataTypes.STRING
  }, {});
  Frame.associate = function(models) {
    // associations can be defined here
    Frame.hasMany(models.Inventory, {foreignKey: 'frameId_FK'});
  };
  return Frame;
};
