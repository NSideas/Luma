
// Media Queries
var mq_small = window.matchMedia('(min-width: 480px)');
var mq_medium = window.matchMedia('(min-width: 720px)');
var mq_large = window.matchMedia('(min-width: 840px)');

if (bowser.msie) {
  document.body.classList.add('ie');
}

$('#menu-toggle').click(function() {
  if (!$('#main-nav').hasClass('open')) {
    $('#main-nav').slideDown(300);
    $('#main-nav').addClass('open');
  } else {
    $('#main-nav').slideUp(300);
    $('#main-nav').removeClass('open');
  }
});
