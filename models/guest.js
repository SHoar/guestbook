var mongoose = require('mongoose')
var Schema = mongoose.Schema
var MongoDB_URI = require ('../index')


var guestSchema = new Schema({
  name: String,
  email: String,
  comment: String,
  default: {
    created_at: Date
  }
})

var Guest = module.exports = mongoose.model('Guest', guestSchema)
