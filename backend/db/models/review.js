'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    filmLocationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'FilmLocations' }
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.belongsTo(models.FilmLocation, {foreignKey: 'filmLocationId'})
  };
  return Review;
};
