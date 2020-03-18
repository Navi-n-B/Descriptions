const express = require('express');
const app = express();
const PORT = 8080;
const sequelize = require('sequelize');
const {  testAuthenticate,getListings} = require('../db/dev/queries.js');

app.get('/', (req, res) => {
  testAuthenticate();
  // getListings.then(err,results)=>{
  //   if(err){
  //     res.send({ message: 'uh-oh' });
  //   }
  //   res.send({ listings: [...results] });
  // }
  res.send({ message: 'endpoint working' });
});
app.get('/getListings', (req, res) => {
  console.log(test());
  // getListings.then(err,results)=>{
  //   if(err){
  //     res.send({ message: 'uh-oh' });
  //   }
  //   res.send({ listings: [...results] });
  // }
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
