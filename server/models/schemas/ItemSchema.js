var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var ItemSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  inventory: {type: Number, required: true},
  costCredits: {type: Number, required: true}
}, {timestamps: true});

module.exports = ItemSchema;
