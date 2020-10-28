'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('BicycleDetails', [
     { productId_FK: 2, size: 52, weight: 5, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
     { productId_FK: 3, size: 50, weight: 8, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
     { productId_FK: 4, size: 50, weight: 10, frame: 'aluminum', createdAt: new Date(), updatedAt: new Date()},
     { productId_FK: 5, size: 55, weight: 6, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
     { productId_FK: 6, size: 53, weight: 10, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
     { productId_FK: 7, size: 53, weight: 8, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
     { productId_FK: 9, size: 51, weight: 15, frame: 'aluminum', createdAt: new Date(), updatedAt: new Date()}
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('BicycleDetails', null, {});
  }
};
