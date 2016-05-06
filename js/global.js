var rebased = {

  init: function() {
    $('.menu-controls').on('click', function() {
      event.stopPropagation();
      rebased.toggleMenu();
    })
    $("#team").on("click", ".toggle-button", rebased.hideOrShowTeam);
    $("#team").on("click", ".divider-button", rebased.hideOrShowTeam);
    $(window).on('scroll', rebased.scrollSite);
    if($('#main_page').length === 1) {
      $(window).on('scroll', rebased.scrollSpy);
    }
  },

  mobileMenuHeight: ( 54 * $('.mobile-menu-links li').length ) + "px",

  toggleExtendedTeamElements: function(wholeSection) {
    var sectionToToggle = wholeSection.children('section'),
        teamDividerLine = wholeSection.children().last(),
        triangleButtonBackground = wholeSection.children('div');

    $(sectionToToggle[0]).toggleClass("to-toggle extend-section");
    teamDividerLine.toggleClass("divider-line extend-divider-line");
    triangleButtonBackground.toggleClass("divider-button-background extend-divider-button-background");
  },

  hideOrShowTeam: function() {
    var wholeSection = $("#team"),
        sectionToToggle = wholeSection.children('section');

    rebased.toggleExtendedTeamElements(wholeSection);
    if (sectionToToggle.attr('class') === "to-toggle") {
      $('html, body').animate({
        scrollTop: 630
      }, 900);
    };
    return false;
  },

  scrollSite: function() {
    var header = $('body').children().first();
    if (window.pageYOffset > 20) {
      header[0].className = "visible";
    } else {
      header[0].className = "";
    };
  },

  showHoverOnCurrentTab: function(tab) {
    $('.active-section').removeClass('active-section');
    tab.next().addClass('active-section');
  },

  scrollSpy: function() {
    var position = window.pageYOffset,
        sectionTeamEnter = $('#team').position().top,
        sectionProjectsEnter = $('#projects').position().top,
        sectionOpenSourceEnter = $('#open-source').position().top,
        sectionCommunityEnter = $('#community').position().top,
        sectionContactEnter = $('#contact').position().top;
    var sectionTeamExit = sectionProjectsEnter,
        sectionProjectsExit = sectionOpenSourceEnter,
        sectionOpenSourceExit = sectionCommunityEnter,
        sectionCommunityExit = sectionContactEnter;

    if (position >= sectionTeamEnter && position < sectionTeamExit) {
      rebased.showHoverOnCurrentTab($('a[href="#team"]'));
    } else if (position >= sectionProjectsEnter && position < sectionProjectsExit) {
      rebased.showHoverOnCurrentTab($('a[href="#projects"]'));
    } else if (position >= sectionOpenSourceEnter && position < sectionOpenSourceExit) {
      rebased.showHoverOnCurrentTab($('a[href="#open-source"]'));
    } else if (position >= sectionCommunityEnter && position < sectionCommunityExit) {
      rebased.showHoverOnCurrentTab($('a[href="#community"]'));
    } else if (position >= sectionContactEnter) {
      rebased.showHoverOnCurrentTab($('a[href="#contact"]'));
    };
  },

  toggleMenu: function() {
    if ($('.mobile-menu-links').css('height') == rebased.mobileMenuHeight) {
      $('.mobile-menu-links').css('height', '0px')
    } else {
      $('.mobile-menu-links').css('height', rebased.mobileMenuHeight)
      $(this).css('border-radius', '0')
    }
    return
  }
}

$('document').ready(function() {
  rebased.init();
});
