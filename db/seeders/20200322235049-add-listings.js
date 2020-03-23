'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    //tbd: generate everything
      return queryInterface.bulkInsert('Listings', [{
        title: 'TBGenerated home',
        host_id: 1,
        amenities_list: '0,1,2,3,4,5,7,8,9,11,13,14,15,16',
        accessibilities_list: '0,1,2,3,5,7,9,11,13,15,16',
        description: 'TBGenerated description',
        location: 'Fake Location',
        guest_size: 4,
        bath_count: 2.5,
        beds_list: '0,3,5',
        pros_list: '0,1,3',
        createdAt : new Date(),
        updatedAt : new Date(),
      }], {});
  },
  down : function (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Listings', [{
    location : 'Fake Location'
  }])
}