'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FaveLists', [
      {
      userId: 1,
      filmLocationId: 1,
      createdAt: '2020-10-11',
      updatedAt: '2020-10-11'
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FaveLists', null, {});
  }
};
