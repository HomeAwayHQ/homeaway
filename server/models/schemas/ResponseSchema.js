var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var ResponseSchema = new mongoose.Schema({
  responder: {type: ObjectId, ref: 'user', required: true},
  survey: {type: ObjectId, ref: 'survey', required: true},
  timeTakenMinutes: [{type: Number, required: true}],
  answers: [{type: String, required: true}],
  finished: {type: Boolean, required: true}
}, {timestamps: true});

module.exports = ResponseSchema;
