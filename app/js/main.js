$(function(){

  $('.album-slider').slick({

    vertical: true,
    slidesToShow:3,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.partners__slider').slick({
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });
 
});