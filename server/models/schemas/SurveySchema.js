var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var SurveySchema = new mongoose.Schema({
  title: {type: String, required: true},
  questionCount: {type: Number, required: true},
  estimatedMinutes: {type: Number, required: true},
  credits: {type: Number, required: true},
  responses: [{type: ObjectId, ref: 'response', required: true}]
}, {timestamps: true});

module.exports = SurveySchema;
