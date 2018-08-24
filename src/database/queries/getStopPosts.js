const pool= require ('../dbconnection');

const getStopPosts = (cb)=>{
pool
.query(
  `SELECT content FROM posts WHERE cohort_id=$1 and post_type=$2 `,
  [1,'Stop'],
//   (error,result)=>{
// if(error){
// cb(error)
// }else{
//   cb(null,result);
// }
// }
cb

)


}
getStopPosts(function(err,result){
  console.log(result.rows);
});
module.exports=getStopPosts;
