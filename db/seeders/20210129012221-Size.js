'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Sizes', [
        { size: 'n/a', createdAt: new Date(), updatedAt: new Date()},
        { size: '48cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '49cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '50cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '51cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '52cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '53cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '54cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '55cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '56cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '57cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '58cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '59cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '60cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '61cm', createdAt: new Date(), updatedAt: new Date()},
        { size: '62cm', createdAt: new Date(), updatedAt: new Date()},
        { size: 'XS',createdAt: new Date(), updatedAt: new Date()},
        { size: 'S',createdAt: new Date(), updatedAt: new Date()},
        { size: 'M',createdAt: new Date(), updatedAt: new Date()},
        { size: 'L',createdAt: new Date(), updatedAt: new Date()},
        { size: 'XL',createdAt: new Date(), updatedAt: new Date()},
        { size: 'XXL',createdAt: new Date(), updatedAt: new Date()},
        { size: 'XXXL',createdAt: new Date(), updatedAt: new Date()},
        { size: '7',createdAt: new Date(), updatedAt: new Date()},
        { size: '7.5',createdAt: new Date(), updatedAt: new Date()},
        { size: '8',createdAt: new Date(), updatedAt: new Date()},
        { size: '8.5',createdAt: new Date(), updatedAt: new Date()},
        { size: '9',createdAt: new Date(), updatedAt: new Date()},
        { size: '9.5',createdAt: new Date(), updatedAt: new Date()},
        { size: '10',createdAt: new Date(), updatedAt: new Date()},
        { size: '10.5',createdAt: new Date(), updatedAt: new Date()},
        { size: '11',createdAt: new Date(), updatedAt: new Date()},
        { size: '11.5',createdAt: new Date(), updatedAt: new Date()},
        { size: '12',createdAt: new Date(), updatedAt: new Date()},
        { size: '12.5',createdAt: new Date(), updatedAt: new Date()},
        { size: '13',createdAt: new Date(), updatedAt: new Date()},
        { size: '13.5',createdAt: new Date(), updatedAt: new Date()},
        { size: '14',createdAt: new Date(), updatedAt: new Date()},
        { size: '14.5',createdAt: new Date(), updatedAt: new Date()},
        { size: '15',createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Sizes', null, {truncate:true, restartIdentity: true});
  }
};
