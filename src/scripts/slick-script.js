$(document).ready(function(){
  // $('.slider').slick();
 
});
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
    initialSlide: 5
    // infinite: false
    // prevArrow: '<button type="button" class="review__button review__button--left"></button>',
    // nextArrow: '<button type="button" class="review__button review__button--right"></button>'

  });
 

// $(document).ready(function(){
//     $('.slick-carousel-1').slick({
//         // @type {string} html
//         nextArrow: '<button class="any-class-name-you-want-next">Next</button>',
//         prevArrow: '<button class="any-class-name-you-want-previous">Previous</button>'
//     });

//     $('.slick-carousel-2').slick({
//         // @type {string} jQuery Selector
//         nextArrow: '.next',
//         prevArrow: '.previous'
//     });

//     $('.slick-carousel-3').slick({
//         // @type {object} DOM node
//         nextArrow: document.getElementById('slick-next'),
//         prevArrow: document.getElementById('slick-previous')
//     });

//     $('.slick-carousel-4').slick({
//         // @type {object} jQuery Object
//         nextArrow: $('.example-4 .next'),
//         prevArrow: $('.example-4 .previous')
//     });
// });