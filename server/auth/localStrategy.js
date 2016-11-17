var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('../models/UserModel');

var localStrategy = new LocalStrategy(
  {usernameField: 'phone', passwordField: 'password'},
  UserModel.validate
);

module.exports = localStrategy;
