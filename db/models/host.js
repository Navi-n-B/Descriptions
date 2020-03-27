'use strict';
module.exports = (sequelize, DataTypes) => {
  const host = sequelize.define('Host', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {});
  host.associate = function(models) {
    // host.belongsTo(models.listing, foreignKey: {unique: true})
  };
  return host;
};