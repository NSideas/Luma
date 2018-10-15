
// GLOBAL


// Browser test
if (bowser.msie) {
  $('html').addClass(bowser.version > 9 ? 'ie' : 'ie-old');
} else if (bowser.msedge) {
  $('html').addClass('msedge');
} else if (bowser.firefox) {
  $('html').addClass('firefox');
}


// Media Queries
var mq = bowser.msie ? null : {
  small: window.matchMedia('(min-width: 480px)'),
  medium: window.matchMedia('(min-width: 720px)'),
  large: window.matchMedia('(min-width: 860px)'),
  xl: window.matchMedia('(min-width: 960px)')
};

function mediaMatches(condition) {
  return mq === null ? false : mq[condition].matches;
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
