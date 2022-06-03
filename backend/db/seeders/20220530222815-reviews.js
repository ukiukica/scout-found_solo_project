'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {
        content: 'Wow! Absolutely impressed.',
        userId: 1,
        filmLocationId: 1,
        createdAt: '2020-10-11',
        updatedAt: '2020-10-11'
      },
      {
        content: 'Meh. The weather sucks here. Not gonna shoot here again',
        userId: 2,
        filmLocationId: 2,
        createdAt: '2020-10-11',
        updatedAt: '2020-10-11'
      },
      {
        content: 'As they said, the future is here.',
        userId: 2,
        filmLocationId: 1,
        createdAt: '2020-10-11',
        updatedAt: '2020-10-11'
      },
      {
        content: 'Makes me feel like I am back home.',
        userId: 1,
        filmLocationId: 2,
        createdAt: '2020-10-11',
        updatedAt: '2020-10-11'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
