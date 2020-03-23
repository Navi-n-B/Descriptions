'use strict';
module.exports = (sequelize, DataTypes) => {
  const accessibility = sequelize.define('accessibility', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {});
  accessibility.associate = function(models) {
    // associations can be defined here
  };
  return accessibility;
};