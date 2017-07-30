$(document).ready(function(){

  // Responsive navbars
  if (window.matchMedia('(max-width: 820px)').matches) {
    $("#desktop-nav").hide();
    $("#mobile-nav").show();
  } else {
    $("#mobile-nav").hide();
    $("#desktop-nav").show();
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
      $("#desktop-nav").hide();
      $("#mobile-nav").show();
    } else {
      $("#mobile-nav").hide();
      $("#desktop-nav").show();
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
  /* Move to next modal */
  $(".next-modal").click(function(){
    closeAllModals();
    $next = $(this).parentsUntil(".slide-modal").last().parent().next();
    console.log($next);
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

  // Modal close buttons
  $(".modal-closebtn").click(function(){
    closeAllModals();
  });

  // Navbar breadcrumbs
  var current_location = window.location.pathname;
  console.log(current_location);
  switch(current_location) {
    case "/how-we-made-this.html":
        $(".how-we-made-this").addClass("active");
        break;
    case "/index.html":
        $(".what-we-do").addClass("active");
        break;
    case "/":
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
});

// Functions

/* Close/hide all modals */
function closeAllModals(){
  $(".slide-modal").css("width", "0");
  $(".slide-modal").css("opacity", "0");
  $(".fixed-column-tag").removeClass("fixed-column");
}
