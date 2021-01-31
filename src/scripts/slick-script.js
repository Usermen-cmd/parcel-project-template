 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    initialSlide: 5
  });
  
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    initialSlide: 5,
    mobileFirst: true,
    responsive: [
    {
      breakpoint: 768,
        settings: {
          slidesToShow: 7,          
        }
      }
    ]
  });