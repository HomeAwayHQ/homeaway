'use strict';

console.log('Starting express server...');
var express = require('express');
var server = express();


console.log('  Registering express middleware...');

console.log('    Express essentials:');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
server.use(express.static('public'));
server.use(logger('dev'));
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(cookieParser());
server.set('json spaces', 2);
console.log('      Done.');

console.log('    Express session:')
var session = require('express-session');
var uuid = require('uuid');
server.use(session({
  genid: function(req) {
    return uuid.v4();
  },
  resave: false,
  saveUninitialized: false,
  secret: 'non-secure-secret'
}));
console.log('      Done.');

console.log('    Passport session:');
var passport = require('./auth/passportConfig.js')(require('passport'));
server.use(passport.initialize());
server.use(passport.session());
console.log('      Done.');


console.log('  Configuring routes and isomorphism...');

console.log('    API routes:');
server.use('/api', require('./routes/api'));
console.log('      Done.');

console.log('    Site routes:');
server.use('/', require('./routes/site'));
console.log('      Done.');

server.use(function(req, res, next) {
  var err = new Error('Such lost. So disappoint.');
  err.status = 404;
  next(err);
});

server.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = server;
