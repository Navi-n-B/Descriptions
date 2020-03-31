// import pool from './pool'
const Sequelize = require('sequelize');
// const db = require('./models/index');
const mariadb = require('mariadb');
const bluebird = require('bluebird')
const models = require('./models');
const {convertToObj,convertToArr} = require('./helper.js');

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectionLimit: 5,
  database: process.env.DB_NAME,
  });

  const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mariadb',
  });

  const getListingById = (listingId, callback) => {
    console.log(listingId);
    try {
      sequelize.authenticate().then(()=>{
        models.Listing.findAll({
          where: {
            id: [Number(listingId)],
          },
        }).then(function(listings){
          console.log(listings);
          models.Listing.findAll().then((listings)=>{console.log("length here",listings.length)});
          const listing = listings[0];
          if(!listing) throw 'no listing found';
          console.log(models.Listing.findAll());
          listing.amenities_list = convertToObj('amenities',listing.amenities_list);
          listing.pros_list = convertToObj('pros',listing.pros_list);
          listing.beds_list = convertToObj('bed_type',listing.beds_list);
          listing.accessibilities_list = convertToObj('accessibilities',listing.accessibilities_list);
          callback(null,listing);
        })
      });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }


  const getListings = (callback) => {
    // console.log(Listing.findAll());
    pool.getConnection().then(conn => {
      conn.query('SELECT * FROM listings ORDER BY id ASC')
      .then((res) => {
        callback(null,format(result));
        conn.release();
      }).catch((err)=> {
        callback(err,null);
      })
      // response.status(200).json(results.rows);
    });
  }

  // const getAmenitiesByList = (list,callback) => {
  //   // console.log(Listing.findAll());
  //   pool.getConnection().then(conn => {
  //     conn.query('SELECT * FROM amenities ORDER BY id ASC')
  //     .then((res) => {
  //       callback(null,res);
  //       conn.release();
  //     }).catch((err)=> {
  //       callback(err,null);
  //     })
  //     // response.status(200).json(results.rows);
  //   });
  // }

  const getHost = (host,callback) => {
    // console.log(Listing.findAll());
    pool.getConnection().then(conn => {
      conn.query('SELECT * FROM hosts ORDER BY id ASC')
      .then((res) => {
        callback(null,res);
        conn.release();
      }).catch((err)=> {
        callback(err,null);
      });
      // response.status(200).json(results.rows);
    });
  }

// query.on('result', function(res) {
//   // `res` is a streams2+ Readable object stream
//   res.on('data', function(row) {
//     console.dir(row);
//   }).on('end', function() {
//     console.log('Result set finished');
//   });
// }).on('end', function() {
//   console.log('No more result sets!');
// });
// const listingQuery = connection.prepare('SELECT * FROM listings WHERE id = :id');

// const getListingById = (request, response) => {
//   const id = parseInt(request.params.id);
//   c.query(listingQuery({id}),(error, results) => {
//     if (error) throw error;
//     console.dir(rows);
//     response.status(200).json(results.rows);
//   });
// };

// const deleteListing = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM listing WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`Listing deleted with ID: ${id}`)
//   })
// }

module.exports = {
  // showDatabases,
  // pool,
  // testAuthenticate,
  getListings,
  getListingById,
  // // createListing,
  // updateListing,
  // deleteListing,
}