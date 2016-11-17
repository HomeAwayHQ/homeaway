var sha = require('crypto-js/sha256');
var rng = require('csprng');

module.exports = (function() {

  var secure = function(password) {
    var salt = rng(256, 16).toString();
    var hash = sha(salt + password).toString();
    return {
      salt: salt,
      hash: hash
    };
  };

  var check = function(check, test) {
    return sha(check.salt + test).toString() === check.hash;
  };

  return {
    secure: secure,
    check: check
  }
})();
