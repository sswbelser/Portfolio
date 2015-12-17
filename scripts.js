$(function() {

  hidePortfolio();
  hideBackground();

  $("#homeButton").on("click", function() {
    mixpanel.track("Home Button Clicked")
    hidePortfolio(1000)
    hideBackground(1000)
    showHome(500)
    $("#homeLi").addClass("active")
    $("#portfolioLi").removeClass("active")
    $("#backgroundLi").removeClass("active")
  });

  $("#portfolioButton").on("click", function() {
    mixpanel.track("Portfolio Button Clicked")
    hideBackground(1000)
    hideHome(1000)
    showPortfolio(500)
    $("#homeLi").removeClass("active")
    $("#portfolioLi").addClass("active")
    $("#backgroundLi").removeClass("active")
  });

  $("#backgroundButton").on("click", function() {
    mixpanel.track("Background Button Clicked")
    hideHome(1000)
    hidePortfolio(1000)
    showBackground(500)
    $("#homeLi").removeClass("active")
    $("#portfolioLi").removeClass("active")
    $("#backgroundLi").addClass("active")
  });

  $("#githubIcon").on("click", function() {
    mixpanel.track("GitHub Clicked")
  });

  $("#linkedinIcon").on("click", function() {
    mixpanel.track("LinkedIn Clicked")
  });

  $("#twitterIcon").on("click", function() {
    mixpanel.track("Twitter Clicked")
  });

  $(".icons").hover(function() {
    $(this).toggleClass("text-primary")
  });

});

var hideHome = function(speed) {
  $("#homeSection").hide(speed)
};

var showHome = function(speed) {
  $("#homeSection").show(speed)
};

var hidePortfolio = function(speed) {
  $("#portfolioSection").hide(speed)
};

var showPortfolio = function(speed) {
  $("#portfolioSection").show(speed)
};

var hideBackground = function(speed) {
  $("#backgroundSection").hide(speed)
};

var showBackground = function(speed) {
  $("#backgroundSection").show(speed)
};
