'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Beds', [{
        type: 'queen',
        title: 'Queen Bed',
        icon: 'IoMdBed',
        description: '',
        createdAt : new Date(),
        updatedAt : new Date(),
      }], {});
  },
  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Beds', [{
      icon: 'IoMdBed',
    }])
};
