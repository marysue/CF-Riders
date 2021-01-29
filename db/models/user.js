'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    avatarURL: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.ReviewRating, {foreignKey: 'userId_FK'});
    User.hasMany(models.Order, {foreignKey: 'userId_FK'});
  };
  return User;
};
