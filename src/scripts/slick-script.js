$('.reviw__slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.reviw__slider-nav',
  initialSlide: 5,
  mobileFirst: true
});
$('.reviw__slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.reviw__slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  initialSlide: 5,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
         centerMode: true,
      }
    }
  ]
});


