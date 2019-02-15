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
    content: 'After becoming inspired by a variety of creative, online portfolios, I decided to learn HTML, CSS, and JavaScript to create my first online portfolio, a static website. This project is hosted by GitHub Pages and uses Jekyll to replicate modular elements of this website such as individual project pages.',
    link: 'http://www.nolanbuzanis.com/index.html',
    github: 'https://github.com/nolbuzanis/nolanbuzanis.com'
  },
  three: {
    title: 'Ball-dropper Robot',
    content: 'Involved programming a 2-wheel robot to autonomously navigate a playfield and compete against other bots in a goal-scoring competition. The playfield is made up of 3 infrared beacons (\'0\', \'1\', and \'2\') to help guide the robot, black tape for navigation, and a "goal". Balls are placed the ledge beneath one of the beacons in a random order, and the infrared beacon is then activated above it. The robot must navigate to the beacon, pick up the ball from the ledge, and place the ball in the goal to score a point. The object of the competition was to score the most goals in a 2-minute interval. Technologies learned: Hardware and software interfacing, DC motor control, servo motor positioning, and electronic interfacing of LED\'s, switches, resistors, capacitors, and chips. We also tinkered with various battery power supplies, infrared sensing and communication, and basic wireless communication using Bluetooth.',
    link: '',
    github: 'https://github.com/nolbuzanis/Mechatronics-Project'
  },
  four: {
    title: 'Spackler Guitar Pedal',
    content: 'The Spackler guitar pedal is a mid-range volume boost with the goal of adding "warmth" or "depth" to a guitar signal. It is not my original design, but I chose to build it to learn the fundamentals of PCB design using EagleCAD and improve my soldering and wiring of electronics.',
    link: ''
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