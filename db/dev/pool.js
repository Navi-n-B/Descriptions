const mariadb = require('mariadb');
const dotenv = require('dotenv');
const Sequelize = require('sequelize');
dotenv.config();
const pool = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {
  host: process.env.DB_HOST,
  dialect: 'mariadb',
});
export default pool;