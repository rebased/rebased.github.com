// toggle menu on mobile
var toggleMenu = function() {
  document.body.classList.toggle('noscroll');
  document.getElementById('nav').classList.toggle('active');
}

document.getElementById('nav').addEventListener('click', toggleMenu);
