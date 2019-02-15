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

projects = {
  one: {
    title: 'Ecogrow',
    content: 'The EcoGrow module assists users with growing fresh fruits and vegetables through an Arduino-based monitoring system. The module is an enclosed insulated system which monitors a plant’s humidity, temperature, and light levels. Readings from the HTU21D humidity and temperature sensor, and the photodiode are outputted to an LCD which can be read by the user. The water control mechanism is controlled using a position servo motor, in which signals sent to the motor results in the movement of a rubber stopper, controlling the flow of water to the plant.',
    link: '',
    github: 'https://github.com/nolbuzanis/EcoGrow'
  },
  two: {
    title: 'Personal Website',
    content: 'After becoming inspired by a variety of creative, online portfolios, I decided to learn HTML, CSS, and JavaScript to create a static website. This project is hosted by GitHub Pages and uses Jekyll to replicate modular elements of this website such as individual project pages.',
    link: 'http://www.nolanbuzanis.com/index.html',
    github: 'https://github.com/nolbuzanis/nolanbuzanis.com'
  }
}

  res.render('index', {
    title: 'Nolan Buzanis',
    header: 'Nolan Buzanis',
    mantra: 'Engineer | Entrepreneur'
  })
})

app.listen(port, function(){
  console.log('Running on port: ' + port)
})