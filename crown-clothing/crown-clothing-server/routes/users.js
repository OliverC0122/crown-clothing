// for express routers.
const express = require('express');
const router = express.Router({mergeParams:true});

const passport = require('passport');


// utils for handling server side errors.
const catchAsync = require('../utils/catchAsync');

const {
    registerUser,
    loginUser,
    logoutUser
} = require('../controllers/users.js');

router.route('/register')
    .post(catchAsync(registerUser));

router.post('/login', passport.authenticate('local'), loginUser);



router.route('/logout').get(logoutUser);

module.exports = router;
