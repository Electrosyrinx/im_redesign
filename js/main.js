$(document).ready(function(){
  var im_words = ["CODE", "DESIGN", "NIC", "TECHNOLOGY", "PHOTOSHOP", "RUBY ON RAILS", "INSPIRED", "WEB DEVELOPMENT", "UNSTOPPABLE", "OBSESSED", "DETERMINED", "INTERACTIVE MEDIA"];
  var im_main_words = [
    "<p class='fadeIn'>Interactive Media</p>",
    "<p class='flip'>Design</p>",
    "<p class='bounceIn'>Code</p>",
    "<p class='rubberBand'>Photoshop</p>",
    "<p class='pulse'>Ruby on Rails</p>",
    "<p class='shake'>JavaScript</p>",
    "<p class='slideInRight'>Determined</p>",
    "<p class='zoomIn'>Obssessed</p>"
  ];

  setResetIntervalMain(true, im_main_words);
  // Load Metas
  loadMetas();

  // Load Navbar
  if (window.matchMedia('(max-width: 820px)').matches) {
    loadMobileBar();
  } else {
    loadDesktopBar();
  }

  $(window).resize(function(){
    if (window.matchMedia('(max-width: 820px)').matches) {
      loadMobileBar();
    } else {
      loadDesktopBar();
    }
  });

  // Load Footer
  // {Put footer loading code here}

  // Manipulate navigation after it's loaded.
  // Any JS used to manipulate navigation should be written here
  $.ajax({
    url: 'partials/desktop-navigation.html' || 'partials/mobile-navigation.html',
    success: function(){
      // Remove .navbar-brand on index.html
      if (hideLogo){
        $('.navbar-brand').hide();
      }
      setResetInterval(true, im_words);


      // Add breadcrumb highlights to nav items:

      // Change to http://www.nicinteractive.media/ pre-deployment
      var WEBSITE_URL = "http://test.ians.studio/";
      var current_location = window.location.href.replace(WEBSITE_URL,'');
      console.log(current_location);
      switch(window.location.href.replace(WEBSITE_URL,'')) {
        case "how-we-made-this.html":
            $(".how-we-made-this").addClass("active");
            break;
        case "what-we-do.html":
            $(".what-we-do").addClass("active");
            break;
        case "students-alumni.html":
            $(".who-we-are").addClass("active-light");
            $(".students-alumni").addClass("active");
            break;
        case "faculty.html":
            $(".who-we-are").addClass("active-light");
            $(".faculty").addClass("active");
            $(".who-we-are").addClass("light-active");
            break;
        case "current-students.html":
            $(".resources").addClass("active-light");
            $(".current-students").addClass("active");
            break;
        default:
            break;
    }
    }
  });

});

// Functions

function loadDesktopBar() {
  $('#navbar').load('partials/desktop-navigation.html');
}

function loadMobileBar() {
  $('#navbar').load('partials/mobile-navigation.html');
}

function loadMetas() {
  var metas = loadPage('partials/metas.html');
  $('head').prepend(metas);
}

function loadPage(href)
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", href, true);
  xmlhttp.send();
  return xmlhttp.responseText;
}

function setResetInterval(bool, words) {
  var index = 0;
  if (bool) {
    rotate = setInterval(function () {
      $(".navbar-brand-words").hide();
      $(".navbar-brand-words").html(words[index]);
      $(".navbar-brand-words").show("slide", { direction: "left" }, 300);
      index += 1;
      if (index > words.length) {
        index = 0;
      }
    }, 2000);
  } else {
    clearInterval(rotate);
  }
}

function setResetIntervalMain(bool, words) {
  var index = 0;
  if (bool) {
    rotate = setInterval(function () {
      $(".scroll").html(words[index]);
      $(".scroll p").addClass("animated");
      index += 1;
      if (index > words.length) {
        index = 0;
      }
    }, 2000);
  } else {
    clearInterval(rotate);
  }
}
