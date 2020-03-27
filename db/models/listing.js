'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    title: DataTypes.STRING,
    //todo: replace w foreign key
    host_id: DataTypes.INTEGER,
    amenities_list: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    guest_size: DataTypes.INTEGER,
    bath_count: DataTypes.FLOAT,
    accessibilities_list: DataTypes.STRING,
    pros_list: DataTypes.STRING,
    beds_list: DataTypes.STRING
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
  };
  return Listing;
};