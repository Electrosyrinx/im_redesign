$(document).ready(function(){

  // Info Page Modals
  $(".info-icon").click(function(){
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
  });

  // SVG Icon animations
  // Some animations use the svg morpheus library

  // Create new SVGMorpheus object
  var labSchedule = new SVGMorpheus('#lab-schedule-svg');
  $("#lab-schedule-svg").hover(function(){
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

  var importantInfo = new SVGMorpheus('#important-info-svg');
  $("#important-info-svg").hover(function(){
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
});
