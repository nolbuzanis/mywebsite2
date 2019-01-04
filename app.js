const express = require('express')
const path = require('path')

var app = express()

const PORT = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, 'src')))

// template engine setup

app.set('views', './src')
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
    title: 'Home',
    header: 'Nolan Buzanis'
  })
})

app.listen(PORT, function(){
  console.log('Running on port: ' + PORT)
})