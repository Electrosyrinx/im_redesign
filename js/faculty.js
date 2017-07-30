$(document).ready(function(){
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
});
