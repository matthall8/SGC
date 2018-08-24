const testsPosts = require('../database/testsPosts');
const goPosts = require('../database/goPosts');
const stopPosts = require('../database/stopPosts');
const continuePosts = require('../database/continuePosts');

console.log(goPosts);
exports.get = (req, res) => {
  console.log(req.url);
  if (req.url === '/') res.render('home', { testsPosts });
  if (req.url === '/Stop') res.render('home', { stopPosts });
  if (req.url === '/Go') {
    res.render('home', { goPosts });
  }
  if (req.url === '/Continue') res.render('home', { continuePosts });
};
