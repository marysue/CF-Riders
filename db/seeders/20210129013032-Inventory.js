'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Inventories', [
      //1 - Trek Emonda
      {frameId_FK:2, productId_FK:1, size_FK:2, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:1, size_FK:2, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:1, size_FK:5, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:1, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:1, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:1, size_FK:2, color_FK:2, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:1, size_FK:2, color_FK:3, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:1, size_FK:2, color_FK:4, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},

      //2 - Fuji Sportif 1.5 Disc Endurance
      {frameId_FK:2, productId_FK:2, size_FK:2, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:2, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:5, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:2, color_FK:2, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:2, color_FK:3, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:2, size_FK:2, color_FK:4, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      //3 - Triban Abyss RC 100, Aluminum
      {frameId_FK:2, productId_FK:3, size_FK:2, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:3, size_FK:2, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:3, size_FK:5, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:3, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:3, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:3, size_FK:2, color_FK:2, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:3, size_FK:2, color_FK:3, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:3, size_FK:2, color_FK:4, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      //8 - Moser 51.151 Road Bike - 1986
      {frameId_FK:2, productId_FK:8, size_FK:2, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:2, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:5, color_FK:2, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:5, color_FK:3, gender_FK:2, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:2, color_FK:2, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:2, color_FK:3, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:2, productId_FK:8, size_FK:2, color_FK:4, gender_FK:3, productType_FK: 1, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      //Accessories
      {frameId_FK:1, productId_FK:9, size_FK:1, color_FK:1, gender_FK:1, productType_FK: 3, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:10, size_FK:1, color_FK:1, gender_FK:1, productType_FK: 3, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:11, size_FK:1, color_FK:1, gender_FK:1, productType_FK: 3, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:12, size_FK:1, color_FK:1, gender_FK:1, productType_FK: 3, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:13, size_FK:1, color_FK:1, gender_FK:1, productType_FK: 3, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:14, size_FK:1, color_FK:1, gender_FK:1, productType_FK: 3, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      //Clothing
      //15 - Castelli Diagonal Full-Zip Jersey - Women's
      {frameId_FK:1, productId_FK:15, size_FK:18, color_FK:1, gender_FK:3, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:15, size_FK:19, color_FK:1, gender_FK:3, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:15, size_FK:20, color_FK:1, gender_FK:3, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      //16 - Castelli Fiorita Jersey - Women's
      {frameId_FK:1, productId_FK:16, size_FK:21, color_FK:1, gender_FK:3, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:16, size_FK:22, color_FK:1, gender_FK:3, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:16, size_FK:23, color_FK:1, gender_FK:3, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},

      //18 - Gore Wear Windstopper Glove - Men's
      {frameId_FK:1, productId_FK:18, size_FK:18, color_FK:1, gender_FK:2, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:18, size_FK:19, color_FK:1, gender_FK:2, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:18, size_FK:20, color_FK:1, gender_FK:2, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:18, size_FK:21, color_FK:1, gender_FK:2, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},

      // 21 - Pearl Izumi Quest Thermal Jersey - Men's
      {frameId_FK:1, productId_FK:21, size_FK:18, color_FK:1, gender_FK:2, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:21, size_FK:19, color_FK:1, gender_FK:2, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:21, size_FK:20, color_FK:1, gender_FK:2, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},
      {frameId_FK:1, productId_FK:21, size_FK:21, color_FK:1, gender_FK:2, productType_FK: 2, quantity:5, createdAt: new Date(), updatedAt: new Date()},


   ], {});
},


  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Inventories', null, {truncate:true, restartIdentity: true});
  }
};
