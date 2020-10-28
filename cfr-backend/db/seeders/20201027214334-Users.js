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
   return queryInterface.bulkInsert('Users', [
     { createdAt: new Date(), updatedAt: new Date(), name: 'Jill Granier', emailAddress: 'jill@granier.com', avatarURL: '../../public/images/avatars/girl1.png'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Donna Frost', emailAddress: 'donna@frost.com', avatarURL: '../../public/images/avatars/girl2.png'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Becky Donahue', emailAddress: 'becky@donahue.com', avatarURL: "../../public/images/avatars/girl3.png"},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Sydney Alana', emailAddress: 'sydney@alana.com', avatarURL: '../../public/images/avatars/girl4.png'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Becky Swanson', emailAddress: 'becky@swanson.com', avatarURL: '../../public/images/avatars/girl5.png'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Jerry Frazier', emailAddress: 'jerry@frazier.com', avatarURL: '../../public/images/avatars/guy1.png'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Bill Baker', emailAddress: 'bill@baker.com', avatarURL: '../../public/images/avatars/guy2.png'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Dave Mehney', emailAddress: 'dave@mahney.com', avatarURL: '../../public/images/avatars/guy3.png'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Jeffrey Wright', emailAddress: 'jeffrey@wright.com', avatarURL: '../../public/images/avatars/guy4.png'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Kyle Bargeman', emailAddress: 'kyle@bargeman.com', avatarURL: '../../public/images/avatars/guy5.png'},



    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
