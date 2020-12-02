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
   return queryInterface.bulkInsert('ClothingDetails', [
     {productId_FK: 1, sex: 'F', size: 'L', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 2, sex: 'F', size: 'M', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 3, sex: 'M', size: 'L', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 4, sex: 'M', size: 'L', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 5, sex: 'M', size: 'M', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 6, sex: 'F', size: 'M', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 7, sex: 'F', size: 'M', createdAt: new Date(), updatedAt: new Date()},
   ]);
  },
  /*For my local db where the numbering is a bit ka ka */
//   return queryInterface.bulkInsert('ClothingDetails', [
//     {productId_FK: 36, sex: 'F', size: 'L', createdAt: new Date(), updatedAt: new Date()},
//     {productId_FK: 37, sex: 'F', size: 'M', createdAt: new Date(), updatedAt: new Date()},
//     {productId_FK: 38, sex: 'M', size: 'L', createdAt: new Date(), updatedAt: new Date()},
//     {productId_FK: 39, sex: 'M', size: 'L', createdAt: new Date(), updatedAt: new Date()},
//     {productId_FK: 40, sex: 'M', size: 'M', createdAt: new Date(), updatedAt: new Date()},
//     {productId_FK: 41, sex: 'F', size: 'M', createdAt: new Date(), updatedAt: new Date()},
//     {productId_FK: 42, sex: 'F', size: 'M', createdAt: new Date(), updatedAt: new Date()},
//   ]);
//  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('ClothingDetails', null, {});
  }
};
