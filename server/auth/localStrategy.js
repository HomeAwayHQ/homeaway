var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('../models/userModel');

var localStrategy = new LocalStrategy(
  {usernameField: 'phone', passwordField: 'password'},
  UserModel.validate
);

module.exports = localStrategy;
