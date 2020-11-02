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
     { createdAt: new Date(), updatedAt: new Date(), name: 'Jill Granier', emailAddress: 'jill@granier.com', avatarURL: 'https://robohash.org/8844d17ef9bd660eb89f564c9fe48cb3?set=set4&bgset=&size=200x200', passwordHash: '$2a$10$7DCRQgRwOWgNDVA1Qr7jtuznABhzoTWRGIVzxK5.LVMATq6v.HyBa'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Donna Frost', emailAddress: 'donna@frost.com', avatarURL: 'https://robohash.org/113f9eadcf6c3866d6f15acfcaa3492e?set=set4&bgset=&size=200x200', passwordHash: '$2a$10$3SECEM3x8mMVQQbT1U5nG.YlkbPHWDjl5yt.IcBZ9bGh95DMfD8hW'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Becky Donahue', emailAddress: 'becky@donahue.com', avatarURL: "https://robohash.org/4745b42def692879a38dea9ec927bd04?set=set4&bgset=&size=200x200", passwordHash: '$2a$10$.Quqk0EVZPSDWpfGOYrd6O7lT/NzqTy7JjIHwqRQNZK2gz8tWW6G2'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Sydney Alana', emailAddress: 'sydney@alana.com', avatarURL: 'https://robohash.org/b7629c09e8b9cc5c4bd4ed21ba7625db?set=set4&bgset=&size=200x200', passwordHash: '$2a$10$abrI6hgfZs17nPxOCCau1uT4LfPcwZNH7Wgj4ZvbcFZ9eGn3dZX/y'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Becky Swanson', emailAddress: 'becky@swanson.com', avatarURL: 'https://robohash.org/a39ca8c041613cac606ab4ff5a674be9?set=set4&bgset=&size=200x200', passwordHash: '$2a$10$iBU.7t8X2e5z/6jmqnegUevnn/x1QSA2.SXVJ4oE2e/WMWAR9gvRG'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Jerry Frazier', emailAddress: 'jerry@frazier.com', avatarURL: 'https://avatars.dicebear.com/v2/avataaars/7beac42c59ae1f77b2b916631a7259e0.svg', passwordHash: '$2a$10$JXPtb51m6xwfdpN0HWVRhuZ4kmlUmmeXoxY5octan3PNyxW6T8.pG'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Bill Baker', emailAddress: 'bill@baker.com', avatarURL: 'https://avatars.dicebear.com/v2/avataaars/62a8a2f701ba4f09d265f4e67c49a963.svg', passwordHash: '$2a$10$7BSBxglyJblNMR14vZAfduBcAGvZSn6691VUhJGPq/WimaPgKGAkS'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Dave Mehney', emailAddress: 'dave@mahney.com', avatarURL: 'https://avatars.dicebear.com/v2/avataaars/98ea696e9aee4349f39591abac7755d8.svg', passwordHash: '$2a$10$gj5zprK8xqJh5xwS3kPZK.f9ohepIVWZvO.ZZspc6sykT5J/u7U.u'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Jeffrey Wright', emailAddress: 'jeffrey@wright.com', avatarURL: 'https://avatars.dicebear.com/v2/avataaars/a17b9eeaacd2c08bed84dc9aaaaaf9d7.svg', passwordHash: '$2a$10$.XUiv.wMVCaNrbodNGryNeMDoIFVGgL7RvdkuYsr5jGZvNH2VBNX.'},
     { createdAt: new Date(), updatedAt: new Date(), name: 'Kyle Bargeman', emailAddress: 'kyle@bargeman.com', avatarURL: 'https://avatars.dicebear.com/v2/avataaars/e7b9a4764138660f87e753937e9dfa48.svg', passwordHash: '$2a$10$zoPV1BayuuHfLd0egtfzY.7z/jjLI70bgWPel0LgdIOJMtjTcCMeO'},



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
