
// @codekit-prepend 'partials/global.js';
// @codekit-prepend 'partials/header.js';


function openFormOverlay($form) {
  $form.fadeIn(300);
  $('body').addClass('no-scroll');
}

function closeFormOverlay($form) {
  $form.fadeOut(300);
  $('body').removeClass('no-scroll');
}

$('#refer-a-friend-btn').click(function(e) {
  e.preventDefault();
  openFormOverlay($('#refer-a-friend'));
});

$('.overlay-module .btn-close').click(function() {
  var $overlay = $(this).closest('.overlay-module');
  closeFormOverlay($overlay);
});

function globalResizeHandler() {
  headerResize();
}

window.addEventListener('resize', throttle(globalResizeHandler, 200));
