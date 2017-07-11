$(document).ready(function(){
  var im_words = ["CODE", "DESIGN", "NIC", "TECHNOLOGY", "PHOTOSHOP", "RUBY ON RAILS", "INSPIRED", "WEB DEVELOPMENT", "UNSTOPPABLE", "OBSESSED", "DETERMINED", "INTERACTIVE MEDIA"];
  var im_words_lowercase = ["code", "design", "north island", "technology", "photoshop", "ruby on rails", "inspired", "web development", "unstoppable", "obssessed", "determined", "interactive media"];

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

  // Panel Hover Animations
  $(".panel").hover(function(){
    $(".panel-info", this).toggleClass("panel-info-visible");
  });

  /* MODALS! */
  $(".matt-boucher").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#matt-boucher").css("width", "100%");
    } else {
      $("#matt-boucher").css("width", "inherit");
    }
    $("#matt-boucher").css("opacity", "1");
  });

  $(".brittany-king").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#brittany-king").css("width", "100%");
    } else {
      $("#brittany-king").css("width", "inherit");
    }
    $("#brittany-king").css("opacity", "1");
  });

  $(".krista-mcallister").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#krista-mcallister").css("width", "100%");
    } else {
      $("#krista-mcallister").css("width", "inherit");
    }
    $("#krista-mcallister").css("opacity", "1");
  });

  // Info Page Modals
  $(".lab-schedule").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#lab-schedule-modal").css("width", "100%");
    } else {
      $("#lab-schedule-modal").css("width", "inherit");
    }
    $("#lab-schedule-modal").css("opacity", "1");
  });

  $(".print-shop").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#print-shop-modal").css("width", "100%");
    } else {
      $("#print-shop-modal").css("width", "inherit");
    }
    $("#print-shop-modal").css("opacity", "1");
  });

  $(".equipment").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#equipment-modal").css("width", "100%");
    } else {
      $("#equipment-modal").css("width", "inherit");
    }
    $("#equipment-modal").css("opacity", "1");
  });

  $(".tech-specs").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#tech-specs-modal").css("width", "100%");
    } else {
      $("#tech-specs-modal").css("width", "inherit");
    }
    $("#tech-specs-modal").css("opacity", "1");
  });

  $(".ftp-access").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#ftp-access-modal").css("width", "100%");
    } else {
      $("#ftp-access-modal").css("width", "inherit");
    }
    $("#ftp-access-modal").css("opacity", "1");
  });

  $(".important-info").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#important-info-modal").css("width", "100%");
    } else {
      $("#important-info-modal").css("width", "inherit");
    }
    $("#important-info-modal").css("opacity", "1");
  });

  /* Move to next modal */
  $(".next-modal").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $(this).parent().next().css("width", "100%");
    } else {
      $(this).parent().next().css("width", "inherit");
    }
    $(this).parent().next().css("opacity", "1");
  });

  /* Move to previous modal */
  $(".prev-modal").click(function(){
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $(this).parent().prev().css("width", "100%");
    } else {
      $(this).parent().prev().css("width", "inherit");
    }
    $(this).parent().prev().css("opacity", "1");
  });

  // Open Modal on Modal
  $(".matt-boucher-modal").click(function(){
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#matt-boucher-images").css("width", "100%");
    } else {
      $("#matt-boucher-images").css("width", "inherit");
    }
    $("#matt-boucher-images").css("opacity", "1");
  });

  // Open Modal on Modal
  $(".brittany-king-modal").click(function(){
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#brittany-king-images").css("width", "100%");
    } else {
      $("#brittany-king-images").css("width", "inherit");
    }
    $("#brittany-king-images").css("opacity", "1");
  });

  // Open Modal on Modal
  $(".krista-mcallister-modal").click(function(){
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#krista-mcallister-images").css("width", "100%");
    } else {
      $("#krista-mcallister-images").css("width", "inherit");
    }
    $("#krista-mcallister-images").css("opacity", "1");
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

  // SVG Icon animations
  var labSchedule = new SVGMorpheus('#lab-schedule');
  $("#lab-schedule").hover(function(){
      labSchedule.to('lab-schedule-hover', {
        easing: 'sine-in-out',
        duration: 800,
        rotation: 'none'
      });
    },
    function (){
      labSchedule.to('lab-schedule-no-hover', {
        easing: 'sine-in-out',
        duration: 800,
        rotation: 'none'
      });
  });

  var importantInfo = new SVGMorpheus('#important-info');
  $("#important-info").hover(function(){
      importantInfo.to('important-info-hover', {
        easing: 'sine-in-out',
        duration: 800,
        rotation: 'none'
      });
    },
    function (){
      importantInfo.to('important-info-no-hover', {
        easing: 'sine-in-out',
        duration: 800,
        rotation: 'none'
      });
  });

  var techSpecs = new SVGMorpheus('#tech-specs');
  $("#tech-specs").hover(function(){
      techSpecs.to('tech-specs-hover', {
        easing: 'sine-in-out',
        duration: 800,
        rotation: 'none'
      });
    },
    function (){
      techSpecs.to('tech-specs-no-hover', {
        easing: 'sine-in-out',
        duration: 800,
        rotation: 'none'
      });
  });

  // Manipulate navigation after it's loaded.
  // Any JS used to manipulate navigation should be written here
  $.ajax({
    url: 'partials/desktop-navigation.html' || 'partials/mobile-navigation.html',
    success: function(){
      // Remove .navbar-brand on index.html
      if (hideLogo){
        $('.navbar-brand').hide();
      }
      // setResetInterval(true, im_words);

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
