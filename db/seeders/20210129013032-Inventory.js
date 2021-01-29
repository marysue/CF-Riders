'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Inventories', [
      //Fuji Sportif 1.5 Disc Endurance
      {frameId_FK:2, productId_FK:2, size_FK:2, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:2, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:5, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:2, color_FK:2, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:2, color_FK:3, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:2, color_FK:4, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      //7
      {frameId_FK:2, productId_FK:7, size_FK:2, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:7, size_FK:2, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:7, size_FK:5, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:7, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:7, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:7, size_FK:2, color_FK:2, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:7, size_FK:2, color_FK:3, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:7, size_FK:2, color_FK:4, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      //8
      {frameId_FK:2, productId_FK:8, size_FK:2, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:2, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:5, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:2, color_FK:2, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:2, color_FK:3, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:2, color_FK:4, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      //9
      {frameId_FK:2, productId_FK:9, size_FK:2, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:9, size_FK:2, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:9, size_FK:5, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:9, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:9, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:9, size_FK:2, color_FK:2, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:9, size_FK:2, color_FK:3, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:9, size_FK:2, color_FK:4, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      //Accessories
      {frameId_FK:1, productId_FK:7, size_FK:1, color_FK:1, gender_FK:1, productType_FK: 3, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:8, size_FK:1, color_FK:1, gender_FK:1, productType_FK: 3, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:9, size_FK:1, color_FK:1, gender_FK:1, productType_FK: 3, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:10, size_FK:1, color_FK:1, gender_FK:1, productType_FK: 3, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:11, size_FK:1, color_FK:1, gender_FK:1, productType_FK: 3, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:12, size_FK:1, color_FK:1, gender_FK:1, productType_FK: 3, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      //Clothing
      {frameId_FK:1, productId_FK:15, size_FK:18, color_FK:1, gender_FK:3, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:15, size_FK:19, color_FK:1, gender_FK:3, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:15, size_FK:20, color_FK:1, gender_FK:3, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:16, size_FK:21, color_FK:1, gender_FK:3, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:16, size_FK:22, color_FK:1, gender_FK:3, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:16, size_FK:23, color_FK:1, gender_FK:3, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},


      {frameId_FK:1, productId_FK:18, size_FK:18, color_FK:1, gender_FK:2, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:18, size_FK:19, color_FK:1, gender_FK:2, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:18, size_FK:20, color_FK:1, gender_FK:2, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:18, size_FK:21, color_FK:1, gender_FK:2, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},




   ], {});
},


  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Inventories', null, {truncate:true, restartIdentity: true});
  }
};
