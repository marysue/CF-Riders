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
      console.log("Seeding Reviews...");
      return queryInterface.bulkInsert('ReviewRatings', [
        { userId_FK: 1, productId_FK: 1, review: 'This was a great bike. Loved it!', rating: 5, createdAt: new Date(), updatedAt: new Date()},
        { userId_FK: 2, productId_FK: 1, review: 'For the price, good value.', rating: 3, createdAt: new Date(), updatedAt: new Date()},
        { userId_FK: 3, productId_FK: 1, review: 'Handles corners well.', rating: 4, createdAt: new Date(), updatedAt: new Date()},
        { userId_FK: 4, productId_FK: 1, review: 'Light, easy to pack', rating: 4, createdAt: new Date(), updatedAt: new Date()},
        { userId_FK: 5, productId_FK: 1, review: 'Love the carbon fiber!', rating: 5, createdAt: new Date(), updatedAt: new Date()},
        { userId_FK: 6, productId_FK: 1, review: 'Watch out for the wind! The bike is so light it tilts in the wind!', rating: 5, createdAt: new Date(), updatedAt: new Date()},
        { userId_FK: 7, productId_FK: 1, review: "Need a new bike rack because of Carbon Fiber frame. Don't want to hang it by the cross bars. It could damage it over a big bump in the road", rating: 5, createdAt: new Date(), updatedAt: new Date()},
        { userId_FK: 8, productId_FK: 1, review: 'Pretty expensive. Won\'t be buying another one for quite a few years.', rating: 4, createdAt: new Date(), updatedAt: new Date()},
        { userId_FK: 9, productId_FK: 1, review: 'Need to talk my SO into joining me.  He would love this bike.', rating: 4, createdAt: new Date(), updatedAt: new Date()},
        { userId_FK: 10, productId_FK: 1, review: 'Wish I had all the money in the world. These bikes are expensive - but really well worth the price!', rating: 5, createdAt: new Date(), updatedAt: new Date()},
        { userId_FK: 5, productId_FK: 2, review: 'Another great bike by Fuji!', rating: 4, createdAt: new Date(), updatedAt: new Date()},
        { userId_FK: 8, productId_FK: 2, review: 'Expensive, but rocks my world!', rating: 5, createdAt: new Date(), updatedAt: new Date()}
        //
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('ReviewRatings', null, {truncate:true, restartIdentity: true});
    */
   return queryInterface.bulkDelete('ReviewRatings', null, {truncate:true, restartIdentity: true});
  }
};
