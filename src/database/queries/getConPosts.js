const pool= require ('../database/dbconnection');

const getConPosts = (user_id,post_type,content,cohort_name)=>{
pool
.query(
  `SELECT post_type,cohort_name,user_id,content FROM posts WHERE post_id=$1,content=$2,cohort_name=$3,post_type=$4`
  [post_id,post_type,cohort_name,content]
)
.then( conPost=(data)=>{
    if(post_type===continue && cohort_type)=> data ;
  )
  .catch(err => console.log(err.msg))
}
}

module.exports=getConPosts;
