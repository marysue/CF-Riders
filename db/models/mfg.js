'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mfg = sequelize.define('Mfg', {
    name: DataTypes.STRING
  }, {});
  Mfg.associate = function(models) {
    // associations can be defined here
    Mfg.hasMany(models.Inventory, {foreignKey: 'mfgId_FK'});
  };
  return Mfg;
};
