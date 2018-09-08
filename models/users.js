var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Account = new Schema({
    username: String,
    password: String,
    mentor: Boolean,
    student: Boolean,
    phone: String
});


module.exports = mongoose.model('Account', Account);
