const mariadb = require('mariadb');
const Promise = require('bluebird').Promise;
require('dotenv').config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectionLimit: 5
  })

// const connect = new Promise(function (resolve,reject) {
//     pool.getConnection().then(connection => {
//       console.log(connection);
//       resolve(connection);
//     }).catch(e => {
//       console.log("create pool error");
//       reject(e);
//     });
//   });


export default pool;