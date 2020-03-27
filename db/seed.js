// const listingModel = require('./index.js').Listings;
// const listingIds = require('./listing_ids.js').listings_ids;
// const Sequelize = require('sequelize');
// var Promise = require('bluebird'); seems liek an obrainer


const mariadb = require('mariadb');
const Promise = require('bluebird').Promise;
const Listing = require('./models/listing.js');

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectionLimit: 5,
  database: process.env.DB_NAME,
  });


// const setData = (callback) => {
// const setListings = (callback) => {
// // console.log(Listing.findAll());
//   pool.getConnection().then(conn => {
//     // conn.batch('INSERT INTO  listings_item(title,host_id,amenities_list,description,location,guest_size,bath_count,accessibilities_list,pros_list,beds_list) values (?,?,?,?,?,?,?,?,?,?)',[
//     //   // 'listing 1',1,
//     // // ])
//     return conn;
//     .then((res) => {
//       callback(null,res);
//       conn.release();
//     }).catch((err)=> {
//       callback(err,null);
//     })
//     // response.status(200).json(results.rows);
//   });
}

export default setListings