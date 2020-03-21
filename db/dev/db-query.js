const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectionLimit: 5
});

const showDatabases = () => {
// = (request, response) => {
  pool.getConnection().then(c => {
    c.query('SHOW DATABASES').then(res => {
      console.log(res); // [{ "1": 1 }]
      // console.log(client.isValid());
      // client.end();
      return res;
    })
    .catch(err => {
      console.log('query error');
      throw err;
    });
  })
}
module.exports.showDatabases = showDatabases


