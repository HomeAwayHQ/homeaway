var restful = require('node-restful');

var ItemSchema = require('./schemas/ItemSchema');

var ItemModel = restful.model('item', ItemSchema);

ItemModel.methods(['get', 'post', 'put', 'delete']);

module.exports = ItemModel;
