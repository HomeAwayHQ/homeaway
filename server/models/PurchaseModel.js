var restful = require('node-restful');

var PurchaseSchema = require('./schemas/PurchaseSchema');

var PurchaseModel = restful.model('purchase', PurchaseSchema);

PurchaseModel.methods(['get', 'post', 'put', 'delete']);

module.exports = PurchaseModel;
