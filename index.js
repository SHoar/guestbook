var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var bcrypt = require('bcryptjs')
var session = require('express-session')
var message = require('express-messages')
var mongoose = require('mongoose')
var MongoDB_URI = 'mongodb://heroku_zzm79phh:ibbdlioorq3b9vede0g6n3q49q@ds145997.mlab.com:45997/heroku_zzm79phh'

mongoose.connect(MongoDB_URI);
var passport = require('passport')


var User = require('./models/user')
var Guest = require('./models/guest')

var app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  res.render('index')
})

// get guestbook page with existing comments
app.get('/', function(req, res){
  res.render('partials/comments')
})

// app.post('/comments')
// app.post('/comments/:id')
// app.get('/comments/:id')
// app.get('/comments/new')
// app.post('/comments/new')

// app.get('/post')
app.get('/register', function(req, res){
  res.render('register')
})


app.get('/login', function(req, res){
  res.render('login')
})



app.listen(3000)

module.exports = MongoDB_URI
