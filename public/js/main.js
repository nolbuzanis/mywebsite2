// Particles.js library
particlesJS.load('particles-js', './particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// Change to portfolio grid during dev
window.addEventListener('load',showProjects);

var button = document.getElementById('projects-menu').addEventListener('click', showProjects);

document.getElementById('projects-back').addEventListener('click', showProjects);

function showProjects() {
  document.getElementById('projects').classList.toggle('hide-projects');
  document.getElementById('headercontent').classList.toggle('hide-main');

  document.getElementById('projects').classList.toggle('show');
  document.getElementById('headercontent').classList.toggle('show');
  document.body.classList.toggle('body-overflow');
}

// Initialize Isotope

var elem = document.querySelector('.grid');
var iso = new Isotope(elem, {
  // options
  itemSelector: '.grid-item',
  layoutMode: 'masonry',
  percentPosition: true
});

// Modals

var modals = document.getElementsByClassName('portfolio-modal');
var n = document.getElementsByClassName('item').length;

for(let i=0; i<n; i++) {
  document.getElementsByClassName('item')[i].addEventListener('click', test);
}


function test() {
  console.log('Link clicked!');
}
