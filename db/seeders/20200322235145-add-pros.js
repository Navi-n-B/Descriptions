'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pros', [{
      title: 'Pro #number',
      description: 'stuff',
      icon: 'IoIosAddCircle',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },
  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pros', [{
      icon: 'IoIosAddCircle'
    }])
  }
}