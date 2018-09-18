
// GLOBAL


// Media Queries
var mq_small = window.matchMedia('(min-width: 480px)');
var mq_medium = window.matchMedia('(min-width: 720px)');
var mq_large = window.matchMedia('(min-width: 860px)');


// Internet Explorer test
if (bowser.msie) {
  document.body.classList.add('ie');
}


// Touch screen test
var touch = true;
$('html').addClass('touch');

function touchHandler(e) {
  e.preventDefault();
  touch = true;
  $('html').addClass('touch').removeClass('no-touch');
}

function mouseMoveHandler() {
  touch = false;
  $('html').removeClass('touch').addClass('no-touch');
}

document.addEventListener('touchstart', touchHandler, {once: true});
// document.addEventListener('mousemove', mouseMoveHandler, {once: true});
