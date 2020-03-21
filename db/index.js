const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'root', '' , {
  host: 'localhost',
  dialect: 'mariadb'
});

class Hosts extends Model {}
const Hosts = sequelize.define('hosts', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    listings: {
      type: Sequelize.STRING,
      allowNull: true,
    }
});
Hosts.sync({ force : true })

// class Beds extends Model {}
// const Beds = sequelize.define('hosts', {
//     id: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     // listings: {
//     //   type: Sequelize.STRING,
//     //   allowNull: true,
//     // }
// });
// Beds.sync({ force : true })

//todo, model rest after dummy Data


// module.exports.Listings = Listings;
module.exports.Hosts = Hosts;
// module.exports.Beds = Beds;
// module.exports.Amenities = Amenities;
// module.exports.Pros = Pros;
// module.exports.Accessibilities?