'use strict';
module.exports = (sequelize, DataTypes) => {
  const FaveList = sequelize.define('FaveList', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    filmLocationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  FaveList.associate = function(models) {
    // associations can be defined here
  };
  return FaveList;
};
