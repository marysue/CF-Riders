'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING(100),
    emailAddress: DataTypes.STRING(100),
    avatarURL: DataTypes.STRING(200),
    passwordHash: DataTypes.STRING(100),
    tokenId: DataTypes.STRING(36)
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
