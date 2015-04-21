$('document').ready(function() {

  function hideOrShowTeam() {
    var wholeSection = $("#team");

    var sectionToToggle = wholeSection.children('section');
    var teamDividerLine = wholeSection.children().last();
    var teamFooter = sectionToToggle.children().last();
    var moreLessButton = teamFooter.children().last();
    var triangleButtonBackground = wholeSection.children('div');

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

  function toggleMenu() {
    if ($('.mobile-menu-links').css('height') == '270px') {
      $('.mobile-menu-links').css('height', '0px')
    } else {
      $('.mobile-menu-links').css('height', '270px')
      $(this).css('border-radius', '0')
    }
    return
  }

  $('.menu-controls').on('click', function() {
    event.stopPropagation();
    toggleMenu();
  })

  $('body').click(function(e) {
    if ($('.mobile-menu-links').css('height') == '270px') {
      toggleMenu();
    }
  });

  $("#team").on("click", ".toggle-button", hideOrShowTeam);
  $("#team").on("click", ".divider-button", hideOrShowTeam);
  $(window).on('scroll', scrollSite);
  $(window).on('scroll', scrollSpy);
});
