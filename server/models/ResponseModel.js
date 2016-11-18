var restful = require('node-restful');

var ResponseSchema = require('./schemas/ResponseSchema');

var ResponseModel = restful.model('response', ResponseSchema);

ResponseModel.methods(['get', 'post', 'put', 'delete']);

module.exports = ResponseModel;
