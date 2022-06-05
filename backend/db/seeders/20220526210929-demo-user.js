'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'Fakee1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'Lazni2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: "santadeluxe@hasevo.com",
        username: "Krysia",
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        email: "attardaient@burgas.vip",
        username: "Marcelle",
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        email: "videninaleksei@filevino.com",
        username: "Manjula",
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        email: "anipar@mailcuk.com",
        username: "Kasi",
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        email: "baywatch202@freeallapp.com",
        username: "Juanne",
        hashedPassword: bcrypt.hashSync('password6')
      },
      {
        email: "karmaissniping@dmxs8.com",
        username: "Ilker",
        hashedPassword: bcrypt.hashSync('password7')
      },
      {
        email: "ali020587@ebarg.net",
        username: "Hala",
        hashedPassword: bcrypt.hashSync('password8')
      },
      {
        email: "PatrickM@gmail.com",
        username: "Patrick",
        hashedPassword: bcrypt.hashSync('password9')
      },
      {
        email: "jessicabrf@nalsci.com",
        username: "Anita",
        hashedPassword: bcrypt.hashSync('password10')
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'Fakee1', 'Lazni2'] }
    }, {});
  }
};
