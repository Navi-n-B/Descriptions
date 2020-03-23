'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bed', [{
        type: 'queen',
        title: 'Queen Bed',
        icon: 'IoMdBed',
        description: '',
        createdAt : new Date(),
        updatedAt : new Date(),
      }], {});
  },
  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Bed', [{
      icon: 'IoMdBed',
    }])
  }
}
