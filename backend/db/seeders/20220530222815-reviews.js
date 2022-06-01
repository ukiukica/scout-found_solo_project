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
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
