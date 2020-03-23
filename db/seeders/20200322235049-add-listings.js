const { getFakeListings } = require('../helper.js');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const listings = getFakeListings();
    // console.log(listings);
    //tbd: generate everything
      return queryInterface.bulkInsert('Listings', listings, {});
  },
  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Listings', [{
      location : 'Fake Location'
    }])
  }
}