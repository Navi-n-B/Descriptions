'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Amenities', [{
        title: 'Unreal cooling'
        icon: 'IoIosIceCream',
        description: 'its real cool in here'
        createdAt : new Date(),
        updatedAt : new Date(),
      }], {});
  },
  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Amenities', [{
      icon: 'IoIosIceCream',
    }])
};
