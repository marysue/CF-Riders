'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Colors', [
      {color: 'n/a', createdAt: new Date(), updatedAt: new Date()},
      {color: 'silver', createdAt: new Date(), updatedAt: new Date()},
      {color: 'blue', createdAt: new Date(), updatedAt: new Date()},
      {color: 'green', createdAt: new Date(), updatedAt: new Date()},
      {color: 'black', createdAt: new Date(), updatedAt: new Date()},
      {color: 'orange', createdAt: new Date(), updatedAt: new Date()},
      {color: 'red', createdAt: new Date(), updatedAt: new Date()},
      {color: 'white', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Colors', null, {truncate:true, restartIdentity: true});
  }
};
