
// @codekit-prepend 'partials/global.js';
// @codekit-prepend 'partials/header.js';


function openFormOverlay($form) {
  $form.fadeIn(200, function() {
    $form.find('.overlay-module--inner-wrap').addClass('visible');
  });
  $('body').addClass('no-scroll');
}

function closeFormOverlay($form) {
  $form.find('.overlay-module--inner-wrap').removeClass('visible');
  $form.fadeOut(200);
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

$('.overlay-module--outer-wrap').click(function(e) {
  if (!e.target.closest('.overlay-module--inner-wrap')) {
    var $overlay = $(this).closest('.overlay-module');
    closeFormOverlay($overlay);
  }
});



// Team

$('.team-member-link').click(function(e) {
  e.preventDefault();
  $(this).parent().siblings().removeClass('active');
  $(this).parent().toggleClass('active');
});

$('.team-member .btn-close').click(function() {
  $(this).closest('.team-member').removeClass('active');
});


function globalResizeHandler() {
  headerResize();
}

window.addEventListener('resize', throttle(globalResizeHandler, 200));
