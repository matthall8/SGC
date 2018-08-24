const pool= require ('../dbconnection');
const pgpromise=require('pg-promise');

const getStopPosts = (cohort_name)=>{
return (pool
.query(
  `SELECT content FROM posts WHERE cohort_name=$1,post_type=$2 `
  [cohort_name,'stop']
))


}
//db.task(t=> getStopPosts("Naz").then console.log(result);)
getStopPosts("Naz").then(function(data){
    console.log(data);
  });

//module.exports=getStopPosts;
