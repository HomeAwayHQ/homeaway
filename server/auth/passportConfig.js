var localStrategy = require('./localStrategy');
var UserModel = require('../models/UserModel');

var passportConfig = function(passport) {
  passport.use(localStrategy);

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    UserModel.findById(id, function(err, user) {
      done(err, user);
    });
  });

  return passport;
};


module.exports = passportConfig;
