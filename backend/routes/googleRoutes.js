//Passport o-auth20
// const passport = require('passport');
// const session = require('express-session');
// require('./utils/googleAuth');
// function isLoggedIn(req, res, next) {
//   req.user ? next() : res.sendStatus(401);
// }

// app.use(
//   session({
//     secret: 'cats',
//     resave: false,
//     saveUninitialized: true,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(express.json());
// dotenv.config({ path: './config/configurations.env' });

// // app.get('/', (req, res) => {
// //   res.send('This is Test');
// // });
// app.get('/', (req, res) => {
//   res.send('<a href="/auth/google">Authenticate with Google</a>');
// });

// app.get(
//   '/auth/google',
//   passport.authenticate('google', { scope: ['email', 'profile'] })
// );

// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google', {
//     successRedirect: '/protected',
//     failureRedirect: '/auth/google/failure',
//   })
// );

// app.get('/protected', isLoggedIn, (req, res) => {
//   res.send(`Hello ${req.user.displayName}`);
// });

// // app.get('/logout', (req, res) => {
// //   req.logout(function (err) {
// //     if (err) {
// //       return next(err);
// //     }
// //     res.redirect('/');
// //   });
// app.get('/logout', (req, res) => {
//   // req.logout(() => {
//   //   res.redirect('/');
//   // });

//   req.session.destroy();
//   // res.redirect('/');
//   res.send('Goodbye!');
// });

// app.get('/auth/google/failure', (req, res) => {
//   res.send('Failed to authenticate..');
// });
