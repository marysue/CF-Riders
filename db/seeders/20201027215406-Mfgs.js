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
   return queryInterface.bulkInsert('Mfgs', [
     { createdAt: new Date(), updatedAt: new Date(), name: 'Fuji'}, //1
     { createdAt: new Date(), updatedAt: new Date(), name: 'Trek'}, //2
     { createdAt: new Date(), updatedAt: new Date(), name: 'Triban'}, //3
     { createdAt: new Date(), updatedAt: new Date(), name: 'Cannondale'}, //4
     { createdAt: new Date(), updatedAt: new Date(), name: 'Giant' }, //5
     { createdAt: new Date(), updatedAt: new Date(), name: 'Moser' },  //6
     { createdAt: new Date(), updatedAt: new Date(), name: 'Gatorskin'}, //7
     { createdAt: new Date(), updatedAt: new Date(), name: 'S-Works' }, //8
     { createdAt: new Date(), updatedAt: new Date(), name: 'Wahoo' }, //9
     { createdAt: new Date(), updatedAt: new Date(), name: 'Deva' }, //10
     { createdAt: new Date(), updatedAt: new Date(), name: 'Lezyne' }, //11
     { createdAt: new Date(), updatedAt: new Date(), name: 'Niterider' }, //12
     { createdAt: new Date(), updatedAt: new Date(), name: 'Castelli' }, //13
     { createdAt: new Date(), updatedAt: new Date(), name: 'Pearl Izumi' }, //14
     { createdAt: new Date(), updatedAt: new Date(), name: 'Specialized '}, //15
     { createdAt: new Date(), updatedAt: new Date(), name: 'Gore' }, //16
     { createdAt: new Date(), updatedAt: new Date(), name: 'Assos'}, //17
   ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Mfgs', null, {});
  }
};
