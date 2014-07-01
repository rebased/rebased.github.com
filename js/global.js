// showOrHideTeam = function(evt) {
//   evt.preventDefault();
//   var teamSection = document.getElementById("team");
//   var teamFooter = teamSection.lastElementChild.lastElementChild;
//   var toggleButton = document.getElementsByClassName("toggleButton")[0];
//   var window = document.defaultView;

//   if (toggleButton.text == "MORE") {
//     teamSection.style.height = "1620px";
//     teamFooter.style.top = "-10px";
//     toggleButton.innerHTML = "LESS";
//   } else {
//     console.log(toggleButton.text);
//     teamSection.style.height = "860px";
//     teamFooter.style.top = "-760px";
//     toggleButton.innerHTML = "MORE";
//     window.scroll(530, 1300);
//   };
//   return false;
// }

toggleClass = function(e) {
  e.preventDefault();
  var teamSection = document.getElementById("team");
  var teamFooter = teamSection.lastElementChild.lastElementChild;
  var toggleButton = document.getElementsByClassName("toggleButton")[0];
  var window = document.defaultView;

  if (teamSection.className != 'extend-section') {
    teamSection.className = "extend-section";
    teamFooter.className = "extend-footer";
    toggleButton.innerHTML = "LESS";
  } else {
    teamSection.className = "";
    teamFooter.className = "";
    toggleButton.innerHTML = "MORE";
    window.scroll(530, 1300);
  };
  return false;
}

document.getElementsByClassName("toggleButton")[0].addEventListener("click", toggleClass, true);
