const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.EXPRESS_PORT;
// const sequelize = require('sequelize');
const { showDatabases } = require('../db/dev/db-query.js');
const {  getListings } = require('../db/queries.js');

app.get('/', (req, res) => {
  const result = showDatabases();
  console.log(result);
  // getListings.then(err,results)=>{
  //   if(err){
  //     res.send({ message: 'uh-oh' });
  //   }
  //   res.send({ listings: [...results] });
  // }
  res.send({ message: 'endpoint working' });
});
app.get('/getListings', (req, res) => {
  getListings((err,results)=>{
    if(err){
      res.send({ message: 'uh-oh' });
    }
    res.send({results});
  });
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
