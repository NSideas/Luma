
// Team

function staffList() {
  var containWidth = $('#staff-list').width();
  var containLeft = $('#staff-list')[0].getBoundingClientRect().x;
  $('.team-member-bio').each(function() {
    $(this).css('left', '0');
    $(this).width(containWidth);
    var leftOffset = $(this)[0].getBoundingClientRect().x;

    if (leftOffset !== containLeft) {
      var difference = leftOffset - containLeft;
      $(this).css('left', '-' + difference + 'px');
    }
  });
}

if ($('#staff-list').length) {
  staffList();
}

$('.team-member-link').click(function(e) {
  e.preventDefault();
  var $teamMember = $(this).parent();
  $teamMember.siblings().removeClass('active');
  $teamMember.toggleClass('active');
  var amountToScroll = $teamMember.offset().top;
  amountToScroll -= mq_small.matches ? 110 : 90;
  $(document).scrollTop(amountToScroll);
});

$('.team-member .btn-close').click(function() {
  $(this).closest('.team-member').removeClass('active');
});
