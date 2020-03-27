'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Accessibilities', [{
      name: 'Accesibility Kind',
      description: 'stuff',
      icon: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/home-decor-trends-1576605581.png',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },
  down : function (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Accessibilities', [{
    icon: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/home-decor-trends-1576605581.png'
  }])
  }
}