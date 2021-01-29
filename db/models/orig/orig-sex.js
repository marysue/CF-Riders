'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sex = sequelize.define('Sex', {
    gender: DataTypes.STRING
  }, {});
  Sex.associate = function(models) {
    // associations can be defined here
  };
  return Sex;
};