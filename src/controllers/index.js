const express = require('express');
const path = require('path');
const router = express.Router();

// import home route controller
const home = require('./home');
const login = require('./login');
const signup = require('./signup');
// router.post('add_Stop',home.post)
//
// router.get('/', home.get);
