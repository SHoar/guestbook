var express = require('express')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')

var app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})

// get guestbook page with existing comments
// app.get('/comments')
// app.post('/comments/:id')
// app.get('/comments/:id')
// app.get('/comments/new')
// app.post('/comments/new')



app.listen(3000)
