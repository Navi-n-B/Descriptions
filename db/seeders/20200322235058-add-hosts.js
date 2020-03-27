'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Hosts', [{
        name: 'Person who hosts',
        email: 'person@gmail.com',
        icon: 'https://www.yourcentralvalley.com/wp-content/uploads/sites/54/2020/01/d24b53fd0e3d4d4fbfcc101f61a2d99a.jpg',
        createdAt : new Date(),
        updatedAt : new Date(),
      }], {});
  },
  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Hosts', [{
      icon: 'https://www.yourcentralvalley.com/wp-content/uploads/sites/54/2020/01/d24b53fd0e3d4d4fbfcc101f61a2d99a.jpg'
    }])
  }
}
