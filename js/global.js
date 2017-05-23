// toggle menu on mobile
var toggleMenu = function() {
  document.body.classList.toggle('noscroll');
  document.getElementById('nav').classList.toggle('active');
}

document.getElementById('nav').addEventListener('click', toggleMenu);

// toggle team list
var toggleTeamList = function(e) {
  e.preventDefault();
  document.getElementById('team').classList.toggle('extended');

  if (!document.getElementById('team').classList.contains('extended')) {
    document.getElementById('team').scrollIntoView()
  }
}

document.getElementById('team-list-toggle').addEventListener('click', toggleTeamList);
