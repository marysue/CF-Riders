'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Genders', [
         {gender: 'N/A', createdAt: new Date(), updatedAt: new Date()},
         {gender: 'M', createdAt: new Date(), updatedAt: new Date()},
         {gender: 'F', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Genders', null, {truncate:true, restartIdentity: true});
  }
};
