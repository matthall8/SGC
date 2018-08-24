const pool= require ('../database/dbconnection');

const getCohort = (cohort_name)=>{
pool
.query(
  `SELECT cohort_name FROM cohort WHERE cohort_name=$1`,
  [cohort_name]
)
.then(cohort=> {
    if(cohort_name)=> cohort_name;
});
    .catch(err => console.log(err.msg))
};


module.exports=getCohort;
