

// Main Nav hide/show

var nav_is_open = false;

$('#menu-toggle').click(function() {
  var $nav = $('#header-nav');
  var $this = $('#menu-toggle');
  if (!nav_is_open) {
    $nav.slideDown(300).addClass('open').removeClass('closed');
    $this.addClass('animating');
    setTimeout(function() {
      $this.addClass('nav-open').removeClass('animating');
    }, 250);
    nav_is_open = true;
  } else {
    $nav.slideUp(300).removeClass('open').addClass('closed');
    $this.removeClass('nav-open').addClass('animating');
    setTimeout(function() {
      $this.removeClass('animating');
    }, 250);
    nav_is_open = false;
  }
});


// Header Top Menu hide/show

var top_menu_is_open = false;

$('#toggle-top-menu').click(function() {
  var $topMenu = $(this).prev('.header-top-container');
  if (!top_menu_is_open) {
    $topMenu.slideDown(300).addClass('open').removeClass('closed');
    top_menu_is_open = true;
  } else {
    $topMenu.slideUp(300).removeClass('open').addClass('closed');
    top_menu_is_open = false;
  }
});


// Handle menu open/close states on resize

function headerResize() {
  if (mq_large.matches) {
    if (nav_is_open || top_menu_is_open) {
      $('#header-nav').attr('style', '').removeClass('open');
      $('#menu-toggle').removeClass('nav-open');
      $('.header-top-container').attr('style', '').removeClass('open');
      nav_is_open = false;
      top_menu_is_open = false;
    }
  }
}
