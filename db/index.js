const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'root', '' , {
  host: 'localhost',
  dialect: 'mariadb'
});

const Model = Sequelize.Model;
class Listings extends Model {}
Listings.init({
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  host_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
  },
  amenities: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT
  },
  location: {
    type: Sequelize.STRING
  },
  guest_size: {
    type: Sequelize.INTEGER
  },
  bed_count: {
    type: Sequelize.INTEGER
  },
  bath_count: {
    type: Sequelize.INTEGER
  },
  bedroom_count: {
    type: Sequelize.INTEGER
  },
  //Figure out foreign key funny business later so seeding will eb easy
  amenities: {
    type: Sequelize.STRING
  },
  //same here
  accessibilities: {
    type: Sequelize.STRING
  },
  sleeping_arrangements: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  refund: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  minimum_stay: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  minimum_stay_type: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

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

class Beds extends Model {}
const Beds = sequelize.define('hosts', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    // listings: {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    // }
});
Beds.sync({ force : true })

//todo, model rest after dummy Data


module.exports.Listings = Listings;
// module.exports.Hosts = Hosts;
// module.exports.Beds = Beds;
// module.exports.Amenities = Amenities;
// module.exports.Pros = Pros;
// module.exports.Accessibilities?