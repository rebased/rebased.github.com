var rebased = {

  init: function() {
    $("#hamburger").click(function() {
      $("#menu").slideToggle("slow", function() {
        $("#hamburger").toggleClass("expanded");
        $("body").toggleClass("noscroll");
      });
    });

    $("#hamburger.expanded").click(function() {
      $("#menu").slideToggle( "slow", function() {
        $("body").toggleClass("noscroll");
      });
    });

    $(".menu-items li a").click(function() {
      $("body").toggleClass("noscroll");

      if($(window).width() < 992) {
        $("#menu").slideToggle( "slow", function() {
          $("#hamburger").toggleClass("expanded");
        });
      };

      var section = $(this).attr('href')
      $("html,body").animate({ scrollTop: $(section).offset().top -85 }, 'slow');
    });

    $("#team").on("click", ".toggle-button", rebased.hideOrShowTeam);
    $("#team").on("click", ".divider-button", rebased.hideOrShowTeam);
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
  }
}

$('document').ready(function() {
  rebased.init();
});
