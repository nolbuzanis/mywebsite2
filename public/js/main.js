// Particles.js library
particlesJS.load('particles-js', './particles.json', function() {
  console.log('callback - particles.js config loaded');
});


var button = document.getElementById('projects-menu').addEventListener('click', showProjects);

function showProjects() {
  console.log('Button clicked');
  document.getElementById('projects').classList.toggle('hide-projects');
  document.getElementById('headercontent').classList.toggle('hide-main');

  document.getElementById('projects').classList.toggle('show');
  document.getElementById('headercontent').classList.toggle('show');
}
