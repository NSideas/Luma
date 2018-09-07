
// Media Queries
var mq_small = window.matchMedia('(min-width: 480px)');
var mq_medium = window.matchMedia('(min-width: 720px)');
var mq_large = window.matchMedia('(min-width: 860px)');

if (bowser.msie) {
  document.body.classList.add('ie');
}

$('#menu-toggle').click(function() {
  var $nav = $('#header-nav');
  if (!$nav.hasClass('open')) {
    $nav.slideDown(300).addClass('open').removeClass('closed');
  } else {
    $nav.slideUp(300).removeClass('open').addClass('closed');
  }
});


$('#toggle-top-menu').click(function() {
  var $topMenu = $(this).prev('.header-top-container');
  if (!$topMenu.hasClass('open')) {
    $topMenu.slideDown(300).addClass('open').removeClass('closed');
  } else {
    $topMenu.slideUp(300).removeClass('open').addClass('closed');
  }
});

function handleResize() {
  if (mq_large.matches) {
    $('#header-nav').attr('style', '');
    $('.header-top-container').attr('style', '');
  }
}

window.addEventListener('resize', throttle(handleResize, 200));
