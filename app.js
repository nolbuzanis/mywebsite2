const express = require('express')
const path = require('path')
var app = express()
const port = 8000

app.use(express.static(path.join(__dirname, 'public')))

// template engine setup
app.set('views', './views')
app.set('view engine', 'pug')

// Home route for get request
app.get('/', function(req, res){
  res.render('index', {
    title: 'Home',
    header: 'Nolan Buzanis'
  })
})

app.listen(port, function(){
  console.log('Running on port: ' + port)
})