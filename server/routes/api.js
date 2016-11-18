var router = require('express').Router();
var passport = require('passport');
var mongoose = require('mongoose');

router.get('/', function(req, res) {
  res.send('HomeAway <3 engineers.');
});

router.get('/authenticate', function(req, res) {
  return req.isAuthenticated() ? res.status(200).json(true) : res.status(401).json(false);
});

router.post('/authenticate', function(req, res) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return res.status(401).json(false);
    }
    if (!user) {
      return res.status(401).json(false);
    }
    req.logIn(user, function(err) {
      return err ? res.status(401).json(false) : res.status(200).json(true);
    });
  })(req, res);
});

router.post('/signup', function(req, res, next) {
  require('../models/UserModel').create(req.body.name, req.body.phone, req.body.password, function(err, result) {
    if (err) {
      return next(err);
    }
    if (!result) { // Someone has already signed up with the provided phone number
      return res.status(200).json(false);
    }
    return res.status(200).json(true);
  });
});

router.get('/drop', function(req, res) {
  mongoose.connection.db.dropDatabase(function(err, result) {
    if (err) {
      let errorMsg = 'encountered an error while attempting to drop database';
      return res.send(errorMsg);
    }
    return res.send('dropped db');
  });
});

router.get('/self', function(req, res) {
  res.send(req.user);
});

require('../models/SurveyModel').register(router, '/survey');
require('../models/ResponseModel').register(router, '/response');

require('../models/ItemModel').register(router, '/item');
require('../models/PurchaseModel').register(router, '/purchase');

require('../models/UserModel').register(router, '/user');
require('../models/AccountModel').register(router, '/account');

module.exports = router;
