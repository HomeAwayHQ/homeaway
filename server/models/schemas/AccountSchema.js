var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var AccountSchema = new mongoose.Schema({
  password: {
    hash: {type: String, required: true},
    salt: {type: String, required: true}
  }
}, {timestamps: true});

module.exports = AccountSchema;
