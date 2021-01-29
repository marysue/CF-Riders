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
   console.log("Seeding ClothingDetails...");
   return queryInterface.bulkInsert('ClothingDetails', [
     {productId_FK: 15, sex: 'F', size: 'XS', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 15, sex: 'F', size: 'XL', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 15, sex: 'F', size: 'L', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 15, sex: 'F', size: 'M', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 15, sex: 'F', size: 'S', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 16, sex: 'F', size: 'XS', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 16, sex: 'F', size: 'XL', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 16, sex: 'F', size: 'L', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 16, sex: 'F', size: 'M', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 16, sex: 'F', size: 'S', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 17, sex: 'M', size: 'S', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 17, sex: 'M', size: 'M', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 17, sex: 'M', size: 'L', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 17, sex: 'M', size: 'XL', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 17, sex: 'M', size: 'XXL', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '9', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '9.5', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '10', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '10.5', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '11', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '11.5', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '12', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '12.5', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '13', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '13.5', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '14', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '14.5', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '15', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 18, sex: 'M', size: '15.5', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 19, sex: 'M', size: 'L', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 19, sex: 'M', size: 'M', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 19, sex: 'M', size: 'XL', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 20, sex: 'F', size: 'S', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 20, sex: 'F', size: 'M', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 20, sex: 'F', size: 'L', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 21, sex: 'F', size: '6-8', createdAt: new Date(), updatedAt: new Date()},
     {productId_FK: 21, sex: 'F', size: '9-12', createdAt: new Date(), updatedAt: new Date()},
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
   return queryInterface.bulkDelete('ClothingDetails', null, {truncate:true, restartIdentity: true});
  }
};
