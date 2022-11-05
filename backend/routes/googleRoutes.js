//Passport o-auth20
const express = require('express');
const passport = require('passport');
const session = require('cookie-session');
const router = express.Router();
require('../utils/googleAuth');
const ErrorHandler = require('../utils/errorHandler');

function isLoggedIn(req, res, next) {
  if (!req.user) {
    res.redirect('/auth/google');
  } else {
    next();
  }
}

// router.get('/auth', (req, res) => {
//   res.send('<a href="/auth/google">Authenticate with Google</a>');
// });

//main route
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

//callback
router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    // successRedirect: '/protected',
    failureRedirect: '/auth/google/failure',
  }),
  (req, res) => {
    res.redirect('http://localhost:3000');
  }
);
//profile
router.get('/login/success', (req, res, next) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'Profile Fetched',
      user: req.user,
    });
  } else return next(new ErrorHandler('Login', 400));
});
//protected routes
router.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.name}`);
});

// app.get('/logout', (req, res) => {
//   req.logout(function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.redirect('/');
//   });

//logout
router.get('/glogout', (req, res) => {
  req.logOut();
  // res.redirect('/auth/google/');

  // req.session.destroy();
  res.send('Goodbye!');
});

router.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

module.exports = router;
