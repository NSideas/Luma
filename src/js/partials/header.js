

// Highlight current nav item

$('.main-nav-item a').each(function() {
  var link = $(this)[0].href;
  var currentPage = window.location.origin + window.location.pathname;
  if (link === currentPage) {
    $(this).addClass('current');
    $(this).closest('.main-nav-item').addClass('current');
  }
});


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


// Handle main nav click/touch

$('#header-nav .main-nav-item > a').click(function(e) {
  e.preventDefault();
  var $navItem = $(this).closest('.main-nav-item');
  if (touch && !$navItem.hasClass('hover')) {
    $navItem.addClass('hover');
    $navItem.siblings().removeClass('hover');
    document.addEventListener('touchstart', function(e) {
      if (!e.target.closest('.main-nav-item')) {
        $('.main-nav-item.hover').removeClass('hover');
      }
    }, {once: true});
  } else {
    window.location = $(this).attr('href');
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
    } else {
      $('.header-top-container').attr('style', '');
      $('#header-nav').attr('style', '');
    }
  }
}


// Fix header on scroll

var header_fixed = false;
var headerScrollTrigger = mq_xl.matches ? 200 : 120;

function headerScroll() {
  if (window.scrollY > headerScrollTrigger && !header_fixed) {
    $('#header').addClass('fixed');
    header_fixed = true;
  } else if (window.scrollY <= headerScrollTrigger) {
    $('#header').removeClass('fixed');
    header_fixed = false;
  }
}
