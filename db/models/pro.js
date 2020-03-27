'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pro = sequelize.define('Pro', {
    title: DataTypes.STRING,
    icon: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Pro.associate = function(models) {
    // Pro.belongsTo(models.listing, foreignKey: {unique: true})
  };
  return Pro;
};