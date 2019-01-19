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

  contact = {
    one: {
      title: 'GitHub',
      link: 'https://github.com/nolbuzanis'
    },
    two: {
      title: 'LinkedIn',
      link: 'https://ca.linkedin.com/in/nolanbuzanis'
    },
    three: {
      title: 'Facebook',
      link: 'https://www.facebook.com/nolan.buzanis'
    },
    four: {
      title: 'Facebook',
      link: 'mailto:nolanbuzanis@gmail.com'
    }
  }

  res.render('index', {
    title: 'Nolan Buzanis',
    header: 'Nolan Buzanis'
  })
})

app.listen(port, function(){
  console.log('Running on port: ' + port)
})