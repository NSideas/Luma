
// @codekit-prepend 'partials/global.js';
// @codekit-prepend 'partials/header.js';
// @codekit-prepend 'partials/overlay.js';
// @codekit-prepend 'partials/staff-list.js';


function globalResizeHandler() {
  headerResize();
  if ($('#staff-list').length) {
    staffList();
  }
}

window.addEventListener('resize', debounce(globalResizeHandler, 100));

var header_fixed = false;

function headerScroll() {
  if (window.scrollY > 120 && !header_fixed) {
    $('#header').addClass('fixed');
    header_fixed = true;
  } else if (window.scrollY <= 120) {
    $('#header').removeClass('fixed');
    header_fixed = false;
  }
}

var timeout;

function globalScrollHandler() {
  console.log(window.scrollY);
  clearTimeout(timeout);
  headerScroll();
  timeout = setTimeout(function() {
    console.log('time out');
    headerScroll();
  }, 150);
}

window.addEventListener('scroll', throttle(globalScrollHandler, 100));
