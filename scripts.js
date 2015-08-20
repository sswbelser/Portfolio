$(function() {

  hidePortfolio();
  hideContact();

  $("#homeButton").on("click", function() {
    mixpanel.track("Home Button Clicked")
    hidePortfolio(1000)
    hideContact(1000)
    showHome(500)
  });

  $("#portfolioButton").on("click", function() {
    mixpanel.track("Portfolio Button Clicked")
    hideContact(1000)
    hideHome(1000)
    showPortfolio(500)
  });

  $("#contactButton").on("click", function() {
    mixpanel.track("Contact Button Clicked")
    hideHome(1000)
    hidePortfolio(1000)
    showContact(500)
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

var hideContact = function(speed) {
  $("#contactSection").hide(speed)
};

var showContact = function(speed) {
  $("#contactSection").show(speed)
};