
// @codekit-prepend 'partials/global.js';
// @codekit-prepend 'partials/header.js';


function globalResizeHandler() {
  headerResize();
}

window.addEventListener('resize', throttle(globalResizeHandler, 200));
