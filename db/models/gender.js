'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define('Gender', {
    gender: DataTypes.STRING
  }, {});
  Gender.associate = function(models) {
    // associations can be defined here
    Gender.hasMany(models.Inventory, {foreignKey: 'gender_FK'});
  };
  return Gender;
};
