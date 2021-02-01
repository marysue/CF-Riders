'use strict';
const bcrypt = require("bcryptjs");

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
    User.hasMany(models.Cart, {foreignKey: 'userId_FK'});
  };

  User.prototype.validatePassword = function (password) {
    // because this is a model instance method, `this` is the user instance here:
    return bcrypt.compareSync(password, this.passwordHash.toString());
  };
  
  return User;
};
