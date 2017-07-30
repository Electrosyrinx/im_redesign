$(document).ready(function(){
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
    $(".rotate").css("-webkit-animation", "rotate " + String(speed) + "s linear infinite");
    $(".rotate").css("-moz-animation", "rotate " + String(speed) + "s linear infinite");
    $(".rotate").css("-o-animation", "rotate " + String(speed) + "s linear infinite");
    $(".rotate").css("animation", "rotate " + String(speed) + "s linear infinite");
    $(".speed-variable").html(String(speed));
  });

  $(".speed-down").click(function(){
    speed = speed - 1;
    if (speed < 1) { speed = 1; }
    $(".rotate").css("-webkit-animation", "rotate " + String(speed) + "s linear infinite");
    $(".rotate").css("-moz-animation", "rotate " + String(speed) + "s linear infinite");
    $(".rotate").css("-o-animation", "rotate " + String(speed) + "s linear infinite");
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

  // Graphic Design Panel animation
  var bigFJs = $(".big-fj");
  var smallFJs = $(".small-fj");
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
});
