'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductTypes', [
      {type: 'Bicycles', createdAt: new Date(), updatedAt: new Date()},
      {type: 'Clothing', createdAt: new Date(), updatedAt: new Date()},
      {type: 'Accessories', createdAt: new Date(), updatedAt: new Date()},
   ], {});
},


  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ProductTypes', null, {truncate:true, restartIdentity: true});
  }
};
