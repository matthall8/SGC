const pool= require ('../database/dbconnection');

const addUser = (username,password)=>{
  pool.query(
    `INSERT INTO users IF NOT EXISTS (username,password) VALUES ($1,$2)` ,[username,password]
  )
  .catch(err => console.log("adding user failed , try again later",err));
};

module.exports = addUser ; 
