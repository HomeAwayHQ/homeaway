var restful = require('node-restful');

var SurveySchema = require('./schemas/SurveySchema');

var SurveyModel = restful.model('survey', SurveySchema);

SurveyModel.methods(['get', 'post', 'put', 'delete']);

module.exports = SurveyModel;
