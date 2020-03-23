// import pool from './pool'
const db = require('./models/');
const mariadb = require('mariadb');
const bluebird = require('bluebird')
const Listing = require('./models/listing.js');
const convertToArr = require('helper.js');

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
    try {
      await sequelize.authenticate().then(()=>{
        db.Listing.find({
          where: {
            id: listingId,
          },
          // attributes: ['id'],
          // include: [{model:db.Room, attributes:['DisplayLabel']}]})
        }).then(function(listing){
          if(!listing) throw 'no listing found';
          listing.amenities_list = convertToArr(listing.amenities_list);
          listing.beds_list = convertToArr(listing.beds_list);
          listing.accessibilities_list = convertToArr(listing.accessibilities_list);
          callback(null,listing);
        })
        // sequelize.
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
  }

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