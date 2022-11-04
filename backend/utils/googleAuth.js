const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID =
  '661997850800-f8phm4rgbd7r14go06h9sgd6nhipt63t.apps.googleusercontent.com';
GOOGLE_CLIENT_SECRET = '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';
const User = require('../models/userModel');

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/auth/google/callback',
      passReqToCallback: true,
    }, //tut 12
    async (req, accessToken, refreshToken, profile, cb) => {
      console.log(profile);

      // const defaultUser = {
      //   name: profile.displayName, //`${profile.name.givenName} ${profile.name.familyName}`,
      //   email: profile.emails[0].value,
      //   googleID: profile.id,
      // };
      User.findOne({ googleID: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log('User Retrieved' + currentUser);
          cb(null, currentUser);
        } else {
          new User({
            name: profile.displayName, //`${profile.name.givenName} ${profile.name.familyName}`,
            email: profile.emails[0].value,
            googleID: profile.id,
            password: profile.id,
          })
            .save()
            .then((user) => {
              console.log('user created' + user);
              cb(null, user);
            });
        }
      });
      // new User({
      //   name: profile.displayName, //`${profile.name.givenName} ${profile.name.familyName}`,
      //   email: profile.emails[0].value,
      //   googleID: profile.id,
      //   password: profile.id,
      // })
      //   .save()
      //   .then((user) => {
      //     console.log('user created' + user);
      //   });

      // const user = await User.findOrCreate({
      //   where: { googleID: profile.id },
      // })
      //   .then(() => {
      //     console.log(user);
      //   })
      //   .catch((err) => {
      //     console.log('Error signing up', err);
      //     cb(err, null);
      //   });

      // if (user && user[0]) return cb(null, user && user[0]);
    }
  )
);

passport.serializeUser((user, cb) => {
  console.log('Serializing user:', user);
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  User.findById(id).then((user) => {
    cb(null, user);
  });
});

// passport.deserializeUser(async (id, cb) => {
//   const user = await User.findOne({ where: { id } }).catch((err) => {
//     console.log('Error deserializing', err);
//     cb(err, null);
//   });

//   console.log('DeSerialized user', user);

//   if (user) cb(null, user);
// });
