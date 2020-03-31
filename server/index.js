const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
require('dotenv').config();
const PORT = process.env.EXPRESS_PORT;
// const sequelize = require('sequelize');
const { showDatabases } = require('../db/dev/db-query.js');
const { getListings, getListingById } = require('../db/queries.js');
app.use('/rooms/:id', express.static(__dirname + '/../dist'));
app.use(express.static(__dirname + '/../dist'));
app.get('/', (req, res) => {
  // const result = showDatabases();
  // console.log(result);
  // getListings.then((err,results)=>{
  //   if(err){
  //     res.send({ message: 'uh-oh' });
  //   }
  //   res.send({ listings: [...results] });
  // })
});
app.get('/api/getListings', (req, res) => {
  getListings((err,results)=>{
    if(err){
      res.send({ message: 'uh-oh' });
    }
    res.send({results});
  });
});
app.get('/api/listing/:id', (req, res) => {
  console.log('hello!');
  getListingById(req.params.id,(err,results)=>{
    if(err){
      res.send({ message: err.message });
      throw err;
    }
    res.send({listing: results});
  });
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
