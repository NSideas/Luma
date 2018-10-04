
// GLOBAL


// Media Queries
var mq_small = window.matchMedia('(min-width: 480px)');
var mq_medium = window.matchMedia('(min-width: 720px)');
var mq_large = window.matchMedia('(min-width: 860px)');
var mq_xl = window.matchMedia('(min-width: 960px)');


// Internet Explorer test
if (bowser.msie) {
  document.body.classList.add('ie');
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

scrollTopBtn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
