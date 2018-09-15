var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    birthdate: {type: Date, required: true}
});

module.exports = mongoose.model('Customer', schema);