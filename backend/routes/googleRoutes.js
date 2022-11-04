//Passport o-auth20
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const router = express.Router();
require('../utils/googleAuth');

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.get('/auth', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    // successRedirect: '/protected',
    // failureRedirect: '/auth/google/failure',
  }),
  (req, res) => {
    res.redirect('http://localhost:3000/product');
  }
);

router.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

// app.get('/logout', (req, res) => {
//   req.logout(function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.redirect('/');
//   });
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });

  // req.session.destroy();
  // // res.redirect('/');
  // res.send('Goodbye!');
});

router.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

module.exports = router;
