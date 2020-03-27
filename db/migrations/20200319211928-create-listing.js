'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      host_id: {
        type: Sequelize.INTEGER
      },
      amenities_list: {
        type: Sequelize.STRING
      },
      description_titles: {
        type: Sequelize.STRING
      },
      description_bodies: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.STRING
      },
      guest_size: {
        type: Sequelize.INTEGER
      },
      bath_count: {
        type: Sequelize.FLOAT
      },
      accessibilities_list: {
        type: Sequelize.STRING
      },
      pros_list: {
        type: Sequelize.STRING
      },
      beds_list: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Listings');
  }
};