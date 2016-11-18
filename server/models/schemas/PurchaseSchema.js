var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var PurchaseSchema = new mongoose.Schema({
  buyer: {type: ObjectId, ref: 'user', required: true},
  item: {type: ObjectId, ref: 'item', required: true},
  data: {type: String, required: false}
}, {timestamps: true});

module.exports = PurchaseSchema;
