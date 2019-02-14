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
console.log(modals);
var portfolioLink = document.getElementsByClassName('item');

 portfolioLink[0].addEventListener('click', test);
 portfolioLink[1].addEventListener('click', test);
 portfolioLink[2].addEventListener('click', test);
 portfolioLink[3].addEventListener('click', test);
 portfolioLink[4].addEventListener('click', test);
 portfolioLink[5].addEventListener('click', test);

function test(n){
  console.log(this);
}
  

