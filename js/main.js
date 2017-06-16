$(document).ready(function(){
  
  // Load Stylesheets
  loadMetas();
  
  // Load Navbar
  if (window.matchMedia('(max-width: 420px)').matches) {
    loadMobileBar();
  } else {
    loadDesktopBar();
  }
  
  // Load Footer
  // {Put footer loading code here}
  
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
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
  return xmlhttp.responseText;
}