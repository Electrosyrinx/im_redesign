$(document).ready(function(){
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

  $(".next-modal").click(function(){
    $next = $(this).parentsUntil(".slide-modal").last().parent().next();
    loadPortfolio($next.attr('id'));
  });


  $(".prev-modal").click(function(){
    $prev = $(this).parentsUntil(".slide-modal").last().parent().prev();
    loadPortfolio($prev.attr('id'));
  });
});

function loadPortfolio(hyphenedName) {
  $('.works-' + hyphenedName).load('partials/' + hyphenedName + '.html');
}
