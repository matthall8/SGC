const pool=require('../dbconnection')

const addPost=(post_type,content,cohort_id,cb)=>{
  pool
  .query(
    `INSERT INTO posts (post_type,content,cohort_id) VALUES ($1,$2,$3)`,[post_type,content,cohort_id],
    cb
  )
}



module.exports = addPost ;
