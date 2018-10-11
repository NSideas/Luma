
// GLOBAL


// Media Queries
var mq_small = window.matchMedia('(min-width: 480px)');
var mq_medium = window.matchMedia('(min-width: 720px)');
var mq_large = window.matchMedia('(min-width: 860px)');
var mq_xl = window.matchMedia('(min-width: 960px)');


// Browser test
if (bowser.msie) {
  $('html').addClass('ie');
} else if (bowser.firefox) {
  $('html').addClass('firefox');
}

// Touch screen test
var touch = true;
$('html').addClass('touch');

function touchHandler(e) {
  document.removeEventListener('mousemove', mouseMoveHandler);
  touch = true;
  $('html').addClass('touch').removeClass('no-touch');
}

function mouseMoveHandler() {
  touch = false;
  $('html').removeClass('touch').addClass('no-touch');
}

document.addEventListener('touchstart', touchHandler, {once: true});
document.addEventListener('mousemove', mouseMoveHandler, {once: true});

var scrollTopBtn = document.getElementById('btn-scroll-top');

function smoothScrollTop(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

scrollTopBtn.addEventListener('click', smoothScrollTop);
