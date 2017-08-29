// toggle menu on mobile
var toggleMenu = function() {
  document.body.classList.toggle('noscroll');
  document.getElementById('nav').classList.toggle('active');
}

document.getElementById('nav').addEventListener('click', toggleMenu);

// toggle team list
var toggleTeamList = function(event) {
  event.preventDefault();
  var teamSection = document.getElementById('team');
  teamSection.classList.toggle('extended');

  if (!teamSection.classList.contains('extended')) {
    window.scrollTo(0, teamSection.offsetTop);
  };
}

document.getElementById('team-list-toggle').addEventListener('click', toggleTeamList);
