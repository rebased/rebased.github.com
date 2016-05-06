var rebased = {

  init: function() {
    $('.menu-controls').on('click', function() {
      event.stopPropagation();
      $('.mobile-menu-links').toggleClass('active');
    })
    $("#team").on("click", ".toggle-button", rebased.hideOrShowTeam);
    $("#team").on("click", ".divider-button", rebased.hideOrShowTeam);
    $(window).on('scroll', rebased.scrollSite);
    if($('#main_page').length === 1) {
      $(window).on('scroll', rebased.scrollSpy);
    }
  },

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

  scrollSpy: function() {
    var position = window.pageYOffset;
    $('.active-section').removeClass('active-section');
    $('#main_page > section').each(function(index, section) {
      if( section.offsetTop <= position && position <= ( section.offsetHeight + section.offsetTop) ) {
        $('a[href="#' + section.id+ '"]').next().addClass('active-section');
      }
    })
  }
}

$('document').ready(function() {
  rebased.init();
});
