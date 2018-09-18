
// Overlay Modules

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
