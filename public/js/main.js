// Particles.js library
particlesJS.load('particles-js', './particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// Portfolio menu button
var button = document.getElementById('scrollToProjects').addEventListener('click', ()=>{
  console.log('Clicked!');
    document.getElementById('projects').scrollIntoView();
});

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

var portfolioLink = document.getElementsByClassName('item');
var n = portfolioLink.length;

for(i=0;i<n;i++){
  portfolioLink[i].addEventListener('click', showModal);
}

function showModal(n){

  var name = this.href.split("#")[1];

  if(!name){
    return;
  }

  modal = document.getElementById(name);
  modal.classList.add('displayBlock');

modal.getElementsByClassName('modal-close')[0].addEventListener('click', ()=>{
  modal.classList.remove('displayBlock');
});
}
  

