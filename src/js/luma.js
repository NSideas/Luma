
// @codekit-prepend 'partials/global.js';
// @codekit-prepend 'partials/header.js';
// @codekit-prepend 'partials/home.js';
// @codekit-prepend 'partials/overlay.js';
// @codekit-prepend 'partials/staff-list.js';


function globalResizeHandler() {
  headerResize();
  if ($('#staff-list').length) {
    staffList();
  }
}

window.addEventListener('resize', debounce(globalResizeHandler, 100));

var top_button_visible = false;

function toggleScrollTop(distance) {
  if (window.scrollY > distance && !top_button_visible) {
    $('#scroll-top-container').fadeIn(300);
    top_button_visible = true;
  } else if (window.scrollY <= distance) {
    $('#scroll-top-container').fadeOut(300);
    top_button_visible = false;
  }
}


var timeout;

function globalScrollHandler() {
  clearTimeout(timeout);
  headerScroll();
  if (mq_medium.matches) {
    toggleScrollTop(window.innerHeight/2);
  }
  timeout = setTimeout(function() {
    headerScroll();
  }, 150);
}

window.addEventListener('scroll', throttle(globalScrollHandler, 100));
