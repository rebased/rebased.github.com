  $('document').ready(function() {

  function hideOrShowTeam() {
    var wholeSection = $("#team");

    var sectionToToggle = wholeSection.children('section'); //zmieniamy wysokość sekcji
    var teamDividerLine = wholeSection.children().last(); //zmieniamy położenie hr
    var teamFooter = sectionToToggle.children().last(); // zmieniamy położenie stopki z MORE/LESS
    var moreLessButton = teamFooter.children().last(); // zmieniamy położenie MORE/LESS
    var triangleButtonBackground = wholeSection.children('div'); //tło do trójkącika

    if (sectionToToggle.attr('class') == "to-toggle") {

      $(sectionToToggle[0]).toggleClass("to-toggle extend-section");
      teamDividerLine.toggleClass("divider-line extend-divider-line");
      teamFooter.addClass("extend-footer");
      triangleButtonBackground.toggleClass("divider-button-background extend-divider-button-background");
      moreLessButton[0].innerHTML = "LESS";

    } else {

      $(sectionToToggle[0]).toggleClass("extend-section to-toggle");
      teamDividerLine.toggleClass("extend-divider-line divider-line");
      teamFooter.removeClass("extend-footer");
      triangleButtonBackground.toggleClass("extend-divider-button-background divider-button-background");
      moreLessButton[0].innerHTML = "MORE";
      $('html, body').animate({
        scrollTop: 630
      }, 900);
    };

    return false;
  }

  function scrollSite() {
    var header = $('body').children().first();
    if (window.pageYOffset > 20) {
      header[0].className = "visible";
    } else {
      header[0].className = "";
    };
  }

  function scrollSpy() {
    var currentActive = $('.active-section') || $('nav');
    var position = window.pageYOffset;

    var sectionTeamEnter = $('#team').position().top;
    var sectionProjectsEnter = $('#projects').position().top;
    var sectionOpenSourceEnter = $('#open-source').position().top;
    var sectionCommunityEnter = $('#community').position().top;
    var sectionContactEnter = $('#contact').position().top;
    var sectionTeamExit = sectionProjectsEnter;
    var sectionProjectsExit = sectionOpenSourceEnter;
    var sectionOpenSourceExit = sectionCommunityEnter;
    var sectionCommunityExit = sectionContactEnter;

    if (position >= sectionTeamEnter && position < sectionTeamExit) {
      currentActive.removeClass('active-section');
      $('a[href="#team"]').next().addClass('active-section');
    } else if (position >= sectionProjectsEnter && position < sectionProjectsExit) {
      currentActive.removeClass('active-section');
      $('a[href="#projects"]').next().addClass('active-section');
    } else if (position >= sectionOpenSourceEnter && position < sectionOpenSourceExit) {
      currentActive.removeClass('active-section');
      $('a[href="#open-source"]').next().addClass('active-section');
    } else if (position >= sectionCommunityEnter && position < sectionCommunityExit) {
      currentActive.removeClass('active-section');
      $('a[href="#community"]').next().addClass('active-section');
    } else if (position >= sectionContactEnter) {
      currentActive.removeClass('active-section');
      $('a[href="#contact"]').next().addClass('active-section');
    };
  }

  $("#team").on("click", ".toggle-button", hideOrShowTeam);
  $("#team").on("click", ".divider-button", hideOrShowTeam);
  $(window).on('scroll', scrollSite);
  $(window).on('scroll', scrollSpy);

});


// !!!
// var activeProjects = function(e) {
//   var menuItems = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
//   var window = document.defaultView;
  

  // for (i = 0; i < menuItems.length; i++) {
  //   var item = menuItems[i];
  //   var toTop = document.body.scrollTop;
  //   var sectionId = item.getAttribute("href").slice(1);
  //   var section = document.getElementById(sectionId).getBoundingClientRect();
  //   var sectionBegin = section.top + toTop //toTop - Math.abs(section.top);
  //   var sectionEnd = section.bottom + toTop // toTop - Math.abs(section.bottom);
  //   if ((window.pageYOffset >= sectionBegin) && (window.pageYOffset <= sectionEnd)) {
  //     item.className = "active";
  //   } else {
  //     item.className = "";
  //   };
  // };
// }

// document.addEventListener("scroll", activeProjects, false);
// window.onscroll = scrollSite;
// window.onload = activeProjects;
