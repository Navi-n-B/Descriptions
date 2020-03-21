'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    title: DataTypes.STRING,
    icon: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Amenity.associate = function(models) {
    // associations can be defined here
  };
  return Amenity;
};