const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb',{ useNewUrlParser: true ,useUnifiedTopology:true});
const Schema = mongoose.Schema;

var NewUser = new Schema({
    name : String,
    place : String,
    phone : Number,
    email : String,
    password:String
});
var Userdata = mongoose.model('user', NewUser);
module.exports = Userdata;