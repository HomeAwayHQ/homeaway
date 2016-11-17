var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var SurveySchema = new mongoose.Schema({
  title: {type: String, required: true},
  questionCount: {type: Number, required: true},
  durationMinutes: {type: Number, required: true},
  rewardCredits: {type: Number, required: true}
}, {timestamps: true});

module.exports = SurveySchema;
