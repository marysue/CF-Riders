'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mfg = sequelize.define('Mfg', {
    name: DataTypes.STRING(100)
  }, {});
  Mfg.associate = function(models) {
    // associations can be defined here
    Mfg.hasOne(models.Product, { foreignKey: "mfgId_FK" } )
  };
  return Mfg;
};
