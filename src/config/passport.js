const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const User = require('../models/User'); 

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'contrasena'
}, async (email, contrasena, done) => {
  // Match Email's User
  const user = await User.findOne({email: email});
  if (!user) {
    return done(null, false, { message: 'Usuario no encontrado.' });
  } else {
    // Match Password's User
    const match = await user.matchPassword(contrasena);
    if(match) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Contraseña incorrecta.' });
    }
  }

}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
