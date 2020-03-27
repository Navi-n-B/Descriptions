'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    title: DataTypes.STRING,
    icon: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Amenity.associate = function(models) {
    // Pro.belongsTo(models.listing, foreignKey: {unique: true})
  };
  return Amenity;
};