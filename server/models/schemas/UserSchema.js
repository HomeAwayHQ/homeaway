var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  phone: {type: String, required: true, unique: true},

  name: {
    first: {type: String, required: true},
    last: {type: String, required: true}
  },

  accountId: {type: String, required: true}
}, {timestamps: true});

UserSchema.plugin(uniqueValidator);

module.exports = UserSchema;
