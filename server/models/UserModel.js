var restful = require('node-restful');

var UserSchema = require('./schemas/UserSchema');
var AccountModel = require('./AccountModel');
var crypto = require('../auth/crypto');

var UserModel = restful.model('user', UserSchema);

UserModel.validate = function(phone, password, done) {
  UserModel.findOne({phone: phone}, function(err, userResult) {
    if (err) {
      return done(err);
    }
    if (!userResult) {
      return done(null, false);
    }
    AccountModel.findById(userResult.accountId, function(err, accountResult) {
      if (err) {
        return done(err);
      }
      if (!accountResult) {
        return done(null, false);
      }
      return crypto.check(accountResult.password, password) ? done(null, userResult) : done(null, false);
    });
  });
}

UserModel.create = function(name, phone, password, done) {
  UserModel.findOne({phone: phone}, function(err, result) {
    if (err) {
      return done(err);
    }
    if (result) {
      return done(null, false);
    }
    password = crypto.secure(password);
    var account = new AccountModel({
      password: password
    });
    account.save(function(err) {
      if (err) {
        return done(err);
      }
    });
    var user = new UserModel({
      phone: phone,
      name: name,
      accountId: account._id
    });
    user.save(function(err) {
      return err ? done(err) : done(null, true);
    });
  });
}

var verify = function(req, res, next) {
  if (!req.isAuthenticated() || !req.user || !req.user._id != req.params.id) {
    return res.status(401).json(false);
  }
  next();
}

UserModel.methods(['get', 'put', 'delete']);

module.exports = UserModel;
