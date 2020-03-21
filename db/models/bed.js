'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bed = sequelize.define('Bed', {
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    icon: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Bed.associate = function(models) {
    // associations can be defined here
  };
  return Bed;
};