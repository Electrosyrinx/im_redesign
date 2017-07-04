$(document).ready(function(){
  var im_words = ["CODE", "DESIGN", "NIC", "TECHNOLOGY", "PHOTOSHOP", "RUBY ON RAILS", "INSPIRED", "WEB DEVELOPMENT", "UNSTOPPABLE", "OBSESSED", "DETERMINED", "INTERACTIVE MEDIA"];
  var im_words_lowercase = ["code", "design", "north island", "technology", "photoshop", "ruby on rails", "inspired", "web development", "unstoppable", "obssessed", "determined", "interactive media"];

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

  // Pnael Hover Animations
  $(".panel").hover(function(){
    $(".panel-info", this).toggleClass("panel-info-visible");
  });

  /* MODALS! */
  /* Open the testModal */
  $(".testModalBtn1").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#testModal").css("width", "100%");
    } else {
      $("#testModal").css("width", "inherit");
    }
    $("#testModal").css("opacity", "1");
  });

  /* Open the testModal2 */
  $(".testModalBtn2").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#testModal2").css("width", "100%");
    } else {
      $("#testModal2").css("width", "inherit");
    }
    $("#testModal2").css("opacity", "1");
  });

  /* Open the testModal */
  $(".testModalBtn3").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#testModal3").css("width", "100%");
    } else {
      $("#testModal3").css("width", "inherit");
    }
    $("#testModal3").css("opacity", "1");
  });

  // Open Modal on Modal
  $(".testModalOnModalBtn").click(function(){
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#testModalOnModal").css("width", "100%");
    } else {
      $("#testModalOnModal").css("width", "inherit");
    }
    $("#testModalOnModal").css("opacity", "1");
  });

  // Open Modal on Modal
  $(".testModalOnModalBtn2").click(function(){
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#testModalOnModal2").css("width", "100%");
    } else {
      $("#testModalOnModal2").css("width", "inherit");
    }
    $("#testModalOnModal2").css("opacity", "1");
  });

  // Open Modal on Modal
  $(".testModalOnModalBtn3").click(function(){
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#testModalOnModal3").css("width", "100%");
    } else {
      $("#testModalOnModal3").css("width", "inherit");
    }
    $("#testModalOnModal3").css("opacity", "1");
  });

  /* Close/hide all modals */
  function closeAllModals(){
      $(".slide-modal").css("width", "0");
      $(".slide-modal").css("opacity", "0");
  }

  $(".modal-closebtn").click(function(){
    closeAllModals();
  });

  /* Close/hide all modals on modals */
  function closeSecondaryModals(){
      $(".modal-on-modal").css("width", "0");
      $(".modal-on-modal").css("opacity", "0");
  }

  $(".modal-on-modal-closebtn").click(function(){
    closeSecondaryModals();
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
      switch(current_location) {
        case "how-we-made-this.html":
            $(".how-we-made-this").addClass("active");
            break;
        case "what-we-do.html":
            $(".what-we-do").addClass("active");
            break;
        case "students-alumni.html":
            $(".who-we-are").addClass("light-active");
            $(".students-alumni").addClass("active");
            break;
        case "faculty.html":
            $(".who-we-are").addClass("light-active");
            $(".faculty").addClass("active");
            break;
        case "current-students.html":
            $(".resources").addClass("light-active");
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
  var metas = 'partials/metas.html';
  $('head').load(metas);
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
