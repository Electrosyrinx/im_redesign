$(document).ready(function(){

  // Load Navbar
  // This allows the developer to not have to constantly edit every single page
  // every time the pesky designers and project managers tell them to change it.
  // Did I say pesky? I meant perky. It was a typo. Yeah, perky!
  // This if/else loads the desktop navbar if the device width is > 820px,
  // otherwise it loads the mobile navbar.
  if (window.matchMedia('(max-width: 820px)').matches) {
    loadMobileBar();
  } else {
    loadDesktopBar();
  }

  // Stops fixed hidden elements in modals from interfering with visible page
  $(".fixed-column-tag").removeClass("fixed-column");

  // If you're a critical designer or developer, you likely resized your browser
  // to see how well we coded the website for various sizes. However, if you're
  // on desktop and resize the navbar to mobile size, it will still display the
  // desktop navbar. This code takes into account user re-sizing, and switches
  // to the mobile navbar when the user makes the browser small enough.
  $(window).resize(function(){
    if (window.matchMedia('(max-width: 820px)').matches) {
      loadMobileBar();
    } else {
      loadDesktopBar();
    }

    if (window.matchMedia('(max-width: 767px)').matches) {
      $(".fixed-column-tag").removeClass("fixed-column");
    } else {
      $(".fixed-column-tag").addClass("fixed-column");
    }
  });

  // Panel Hover Animations
  // This turns the duotoned images on students-alumni.html into grayscale by
  // toggling a class with the grayscale CSS rules.
  // See section 3b. in css/main.css
  $(".panel").hover(function(){
    $(".panel-info", this).toggleClass("panel-info-visible");
  });

  /* Modals */
  // Clicking the panel will close any presently open modals (if any) and then
  // open the modal specified by the panel.
  $(".student-panel").click(function(){
    var hyphenedName = $(this).attr('id').replace('-panel', '');
    closeAllModals();
    // This loads portfolio images on-demand, rather than on page-load to
    // prevent students-alumni.html from taking forever to load
    loadPortfolio($("#" + hyphenedName).attr('id'));
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      // When closed, the width of the modal is 0px, ie, invisible. When the
      // width is increased, the modal becomes visible
      $("#" + hyphenedName).css("width", "100%");
    } else {
      $("#" + hyphenedName).css("width", "inherit");
    }
    $("#" + hyphenedName).css("opacity", "1");

    if (window.matchMedia('(max-width: 767px)').matches) {
      $(".fixed-column-tag").removeClass("fixed-column");
    } else {
      $(".fixed-column-tag").addClass("fixed-column");
    }
  });

  // Faculty Modals
  $(".faculty-panel").click(function(){
    var hyphenedName = $(this).attr('id').replace('-panel', '');
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      // When closed, the width of the modal is 0px, ie, invisible. When the
      // width is increased, the modal becomes visible
      $("#" + hyphenedName).css("width", "100%");
    } else {
      $("#" + hyphenedName).css("width", "inherit");
    }
    $("#" + hyphenedName).css("opacity", "1");

    if (window.matchMedia('(max-width: 767px)').matches) {
      $(".fixed-column-tag").removeClass("fixed-column");
    } else {
      $(".fixed-column-tag").addClass("fixed-column");
    }
  });

  // FAQ Modals
  function showWhereWho(hyphenedName) {
    setTimeout(function(){
      $("#" + hyphenedName + " .where-who-container").addClass("animated fadeIn");
    }, 1000);
  }

  $(".faq-panel").click(function(){
    var hyphenedName = $(this).attr('id').replace('-panel', '');
    closeAllModals();
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      // When closed, the width of the modal is 0px, ie, invisible. When the
      // width is increased, the modal becomes visible
      $("#" + hyphenedName).css("width", "100%");
    } else {
      $("#" + hyphenedName).css("width", "inherit");
    }
    $("#" + hyphenedName).css("opacity", "1");

    $("#" + hyphenedName + " .where-who-container").css("opacity", "0");
    showWhereWho(hyphenedName);
  });

  // JavaScript Animation Manipulation
  var speed = 15;
  $(".speed-up").click(function(){
    speed = speed + 1;
    if (speed > 25) { speed = 25; }
    $(".rotate").css("animation", "rotate " + String(speed) + "s linear infinite");
    $(".speed-variable").html(String(speed));
  });

  $(".speed-down").click(function(){
    speed = speed - 1;
    if (speed < 1) { speed = 1; }
    $(".rotate").css("animation", "rotate " + String(speed) + "s linear infinite");
    $(".speed-variable").html(String(speed));
  });

  var size = 75;
  $(".size-up").click(function(){
    size = size + 5;
    if (size > 100) { size = 100; }
    $(".rotate").css("max-width", String(size) + "%");
    $(".size-variable").html(String(size));
  });

  $(".size-down").click(function(){
    size = size - 5;
    if (size < 10) { size = 10; }
    $(".rotate").css("max-width", String(size) + "%");
    $(".size-variable").html(String(size));
  });
  // Images fading in and out on some FAQ modals
  var hide = false;
  setInterval(function(){
    if (!hide) {
      $(".modal-fade-image img").css("opacity", "0");

      $(".modal-fade-image-caption").css("opacity", "0");
      $(".modal-fade-image-caption-2").css("opacity", "1");
      hide = true;
    } else {
      $(".modal-fade-image img").css("opacity", "1");

      $(".modal-fade-image-caption").css("opacity", "1");
      $(".modal-fade-image-caption-2").css("opacity", "0");
      hide = false;
    }
  }, 3500);


  // Info Page Modals
  $(".lab-schedule").click(function(){
    closeAllModals();
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#lab-schedule-modal").css("width", "100%");
    } else {
      $("#lab-schedule-modal").css("width", "inherit");
    }
    $("#lab-schedule-modal").css("opacity", "1");
  });

  $(".print-shop").click(function(){
    closeAllModals();
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#print-shop-modal").css("width", "100%");
    } else {
      $("#print-shop-modal").css("width", "inherit");
    }
    $("#print-shop-modal").css("opacity", "1");
  });

  $(".equipment").click(function(){
    closeAllModals();
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#equipment-modal").css("width", "100%");
    } else {
      $("#equipment-modal").css("width", "inherit");
    }
    $("#equipment-modal").css("opacity", "1");
  });

  $(".tech-specs").click(function(){
    closeAllModals();
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#tech-specs-modal").css("width", "100%");
    } else {
      $("#tech-specs-modal").css("width", "inherit");
    }
    $("#tech-specs-modal").css("opacity", "1");
  });

  $(".ftp-access").click(function(){
    closeAllModals();
    if (window.matchMedia('(max-width: 820px)').matches) {
      $("#ftp-access-modal").css("width", "100%");
    } else {
      $("#ftp-access-modal").css("width", "inherit");
    }
    $("#ftp-access-modal").css("opacity", "1");
  });

  $(".important-info").click(function(){
    closeAllModals();
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
    $next = $(this).parentsUntil(".slide-modal").last().parent().next();
    loadPortfolio($next.attr('id'));
    if (window.matchMedia('(max-width: 820px)').matches) {
      $next.css("width", "100%");
    } else {
      $next.css("width", "inherit");
    }
    $next.css("opacity", "1");

    if (window.matchMedia('(max-width: 767px)').matches) {
      $(".fixed-column-tag").removeClass("fixed-column");
    } else {
      $(".fixed-column-tag").addClass("fixed-column");
    }

    if (!$next.hasClass('slide-modal')) {
      $(".fixed-column-tag").removeClass("fixed-column");
    }
  });

  /* Move to previous modal */
  $(".prev-modal").click(function(){
    closeAllModals();
    $prev = $(this).parentsUntil(".slide-modal").last().parent().prev();
    loadPortfolio($prev.attr('id'));
    // Responsive sizing
    if (window.matchMedia('(max-width: 820px)').matches) {
      $prev.css("width", "100%");
    } else {
      $prev.css("width", "inherit");
    }
    $prev.css("opacity", "1");

    if (window.matchMedia('(max-width: 767px)').matches) {
      $(".fixed-column-tag").removeClass("fixed-column");
    } else {
      $(".fixed-column-tag").addClass("fixed-column");
    }

    if (!$prev.hasClass('slide-modal')) {
      $(".fixed-column-tag").removeClass("fixed-column");
    }
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

  // Modal close buttons
  $(".modal-closebtn").click(function(){
    closeAllModals();
  });

  $(".modal-on-modal-closebtn").click(function(){
    closeSecondaryModals();
  });

  // SVG Icon animations
  // Some animations use the svg morpheus library
  if (infoPage) { // Only load if on information page
    // Create new SVGMorpheus object
    var labSchedule = new SVGMorpheus('#lab-schedule');
    $("#lab-schedule").hover(function(){
        // The .to method is from the svg-morpheus.js library
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
  }

  var bigFJs = $(".big-fj");
  var smallFJs = $(".small-fj");
  var visibleFJs = (".visible-fj");
  var bigAttributes = [];
  var smallAttributes = [];


  function getAttrs(element){
    x = $(element).attr("x");
    y = $(element).attr("y");
    width = $(element).attr("width");
    height = $(element).attr("height");

    return [x, y, width, height];
  }

  for (i = 0; i < bigFJs.length; i++){
    bigAttributes.push(getAttrs($(bigFJs[i])));
  }

  for (i = 0; i < smallFJs.length; i++){
    smallAttributes.push(getAttrs(smallFJs[i]));
  }

  $("#graphic-design-panel").hover(function(){
    for (i = 0; i < smallFJs.length; i++){
      $(smallFJs[i]).attr("x", bigAttributes[i][0]);
      $(smallFJs[i]).attr("y", bigAttributes[i][1]);
      $(smallFJs[i]).attr("width", bigAttributes[i][2]);
      $(smallFJs[i]).attr("height", bigAttributes[i][3]);
    }
  }, function(){
    for (i = 0; i < smallFJs.length; i++){
      $(smallFJs[i]).attr("x", smallAttributes[i][0]);
      $(smallFJs[i]).attr("y", smallAttributes[i][1]);
      $(smallFJs[i]).attr("width", smallAttributes[i][2]);
      $(smallFJs[i]).attr("height", smallAttributes[i][3]);
    }
  });

  // Manipulate elements after they're loaded loaded.
  // Any JS used to manipulate loaded elements should be written here
  $.ajax({
    url: 'partials/desktop-navigation.html' || 'partials/mobile-navigation.html',
    success: function(){
      // Remove .navbar-brand on index.html
      if (hideLogo){
        $('.navbar-brand').hide();
      }

      var current_location = window.location.pathname;
      switch(current_location) {
        case "/how-we-made-this.html":
            $(".how-we-made-this").addClass("active");
            break;
        case "/index.html":
            $(".what-we-do").addClass("active");
            break;
        case "/students-alumni.html":
            $(".who-we-are").addClass("light-active");
            $(".students-alumni").addClass("active");
            break;
        case "/faculty.html":
            $(".who-we-are").addClass("light-active");
            $(".faculty").addClass("active");
            break;
        case "/current-students.html":
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

function loadPortfolio(hyphenedName) {
  $('.works-' + hyphenedName).load('partials/' + hyphenedName + '.html');
}

function loadPage(href)
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", href, true);
  xmlhttp.send();
  return xmlhttp.responseText;
}

/* Close/hide all modals */
function closeAllModals(){
  $(".slide-modal").css("width", "0");
  $(".slide-modal").css("opacity", "0");
  $(".fixed-column-tag").removeClass("fixed-column");
}

/* Close/hide all modals on modals */
function closeSecondaryModals(){
  $(".modal-on-modal").css("width", "0");
  $(".modal-on-modal").css("opacity", "0");
}
