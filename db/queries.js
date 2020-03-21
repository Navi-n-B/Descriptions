// import pool from './pool'
const mariadb = require('mariadb');
const Promise = require('bluebird').Promise;
const Listing = require('./models/listing.js');
// require('dotenv').config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectionLimit: 5,
  database: process.env.DB_NAME,
  });
//   const sequelize = new Sequelize('database', 'root', '' , {
//   host: 'localhost',
//   dialect: 'mariadb'
// });

const getListings = (callback) => {
  // console.log(Listing.findAll());
  pool.getConnection().then(conn => {
    conn.query('SELECT * FROM listings ORDER BY id ASC')
    .then((res) => {
      callback(null,res);
      conn.release();
    }).catch((err)=> {
      callback(err,null);
    })
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
  // getListingById,
  // // createListing,
  // updateListing,
  // deleteListing,
}