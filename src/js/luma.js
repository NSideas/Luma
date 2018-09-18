
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
