'use strict';
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING(100),
    emailAddress: DataTypes.STRING(100),
    avatarURL: DataTypes.STRING(200),
    passwordHash: DataTypes.STRING(100),
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.validatePassword = function (password) {
    // because this is a model instance method, `this` is the user instance here:
    return bcrypt.compareSync(password, this.passwordHash.toString());
  };

  return User;
};
