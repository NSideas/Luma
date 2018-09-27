
// HOME

var homePageSlider = new Swiper('#home-page-slider', {
  speed: 0,
  followFinger: false,
  autoHeight: true,
  threshold: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'home-page-slider-bullet',
    bulletActiveClass: 'active'
  }
});
