const testsPosts = require('../database/testsPosts');
const goPosts = require('../database/goPosts');
const stopPosts = require('../database/stopPosts');
const continuePosts = require('../database/continuePosts');
const getStopPosts = require('../database/queries/getStopPosts')
const addPost = require('../database/queries/addPost')

console.log(goPosts);
exports.post=(req,res)=>{

 console.log("I am here");
    content= req.body.addedPost;
    console.log("body",req.body);
    addPost("Stop",content,1,(err,result)=>{
      if(err){
         console.log("errr",err);
    }else{
      res.redirect('Stop');
    }



});
}
exports.get = (req, res) => {
  console.log(req.url);
  if (req.url === '/') res.render('home', { testsPosts });
  if (req.url === '/Stop') {

    getStopPosts((err,result)=>{
      if(err){
        //response to erros
      }else{
        const {rows}=result;
        res.render('home', { type:"Stop",stopPosts:rows });
      }
    })
    //

  }
  if (req.url === '/Go') {
    res.render('home', { goPosts });
  }
  if (req.url === '/Continue') res.render('home', { type:"Continue", continuePosts });



};
