var restful = require('node-restful');

var AccountSchema = require('./schemas/AccountSchema');

var AccountModel = restful.model('account', AccountSchema);

var verify = function(req, res, next) {
  if (!req.isAuthenticated() || !req.user || req.user._id != req.params.id) {
    return res.status(401).json(false);
  }
  next();
}

AccountModel.methods(['get']);

module.exports = AccountModel;
