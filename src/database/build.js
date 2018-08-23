
const fs = require('fs');
const dbConnection = require('./dbconnection');

const dbEx = fs.readFileSync(`${__dirname}/build.sql`, 'utf-8');
dbConnection.query(dbEx, (error, data) => {
  if (error) {
    console.log('error', error);
  } else {
    console.log("success");
  }
});

//dbEx();

//module.exports = dbEx;
