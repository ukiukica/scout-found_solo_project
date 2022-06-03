'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FilmLocations', [
      {
      title: '360 Projection Studio',
      logline: 'Ditch the green screen. The future is here.',
      description: 'Lose yourself in this state-of-the-art studio featuring a 360-degree projection suitable for all of your shooting needs.',
      imageUrl: '/images/projection_studio.jpg',
      address: 'Studio City, Los Angeles',
      userId: 1,
      createdAt: '2020-10-11',
      updatedAt: '2020-10-11'
    },
    {
      title: 'Death Valley',
      logline: 'Where westerns are shot.',
      description: 'Imagine yourself riding a horse into the sunset. You would be riding it over these lands. A perfect location for all your film needs.',
      imageUrl: '/images/monument_valley.jpg',
      address: '16663 N Paso Rd, Canyon Of Death, Utah',
      userId: 2,
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
