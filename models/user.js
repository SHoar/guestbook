var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: String,
  username: String,
  password: String,
})

var User = module.exports = mongoose.model('User', userSchema)
