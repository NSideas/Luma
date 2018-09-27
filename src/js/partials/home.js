
// HOME

var homePageSlider = new Swiper('#home-page-slider', {
  threshold: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'home-page-slider-bullet',
    bulletActiveClass: 'active'
  }
});
