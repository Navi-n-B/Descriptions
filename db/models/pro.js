'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pro = sequelize.define('Pro', {
    title: DataTypes.STRING,
    icon: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Pro.associate = function(models) {
    // associations can be defined here
  };
  return Pro;
};