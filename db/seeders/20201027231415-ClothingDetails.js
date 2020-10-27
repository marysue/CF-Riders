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
     {productId_FK: 16, sex: 'F', size: 'L', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 17, sex: 'F', size: 'M', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: 'L', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 19, sex: 'M', size: 'L', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 20, sex: 'M', size: 'M', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 21, sex: 'F', size: 'M', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 22, sex: 'F', size: 'M', createdAt: new Date(), updatedAt: new Date()},
   ]);
  },

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
