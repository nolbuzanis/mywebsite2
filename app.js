const express = require('express')
var app = express()
const port = 8000

app.get('/', function(req, res){
  res.send('Hello World!')
})

app.listen(port, function(){
  console.log('Running on port: ' + port)
})