'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FilmLocations', [
      {
      title: '360 Projection Studio',
      description: 'Lose yourself in this state-of-the-art studio featuring a 360-degree projection suitable for all of your shooting needs.',
      imageUrl: '/images/projection_studio.jpg',
      userId: 1,
      createdAt: '2020-10-11',
      updatedAt: '2020-10-11'
    },

  ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('FilmLocations', null, {});
  }
};
