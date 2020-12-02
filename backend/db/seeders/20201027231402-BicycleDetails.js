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
   /* For Heroku DB, where the numbering will start at 1 */
   return queryInterface.bulkInsert('BicycleDetails', [
     { productId_FK: 1, size: 52, weight: 5, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
     { productId_FK: 2, size: 50, weight: 8, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
     { productId_FK: 3, size: 50, weight: 10, frame: 'aluminum', createdAt: new Date(), updatedAt: new Date()},
     { productId_FK: 4, size: 55, weight: 6, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
     { productId_FK: 5, size: 53, weight: 10, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
     { productId_FK: 6, size: 53, weight: 8, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
     { productId_FK: 7, size: 51, weight: 15, frame: 'aluminum', createdAt: new Date(), updatedAt: new Date()}
   ])
  },
  /* For my local db where the numbering is ka-ka */
  //  return queryInterface.bulkInsert('BicycleDetails', [
  //    { productId_FK: 22, size: 52, weight: 5, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
  //    { productId_FK: 23, size: 50, weight: 8, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
  //    { productId_FK: 24, size: 50, weight: 10, frame: 'aluminum', createdAt: new Date(), updatedAt: new Date()},
  //    { productId_FK: 25, size: 55, weight: 6, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
  //    { productId_FK: 26, size: 53, weight: 10, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
  //    { productId_FK: 27, size: 53, weight: 8, frame: 'carbon fiber', createdAt: new Date(), updatedAt: new Date()},
  //    { productId_FK: 28, size: 51, weight: 15, frame: 'aluminum', createdAt: new Date(), updatedAt: new Date()}
  //  ])
  // },
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
