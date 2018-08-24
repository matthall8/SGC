const pool=require('../database/dbconnection')

const addPost=(post_type,content,cohort_id,user_id)=>{
  pool
  .query(
    `INSERT INTO posts VALUES ($1,$2,$3,$4)`,[post_type,content,cohort_id,user_id]
  )
  .catch(err=>console.log("errrrrr adding post");
}

module.exports = addPost ;
