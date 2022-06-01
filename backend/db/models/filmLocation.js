'use strict';
module.exports = (sequelize, DataTypes) => {
  const FilmLocation = sequelize.define('FilmLocation', {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    }
  }, {});
  FilmLocation.associate = function(models) {
    // associations can be defined here
    FilmLocation.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return FilmLocation;
};
