'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Frames', [
     {type: 'n/a', createdAt: new Date(), updatedAt: new Date()},
     {type: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
     {type: 'aluminum',     createdAt: new Date(), updatedAt: new Date()},
     {type: 'steel',        createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Frames', null, {truncate:true, restartIdentity: true});

  }
};
