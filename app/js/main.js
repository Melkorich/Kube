let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

//чтобы стрелка при клике работала всегда, например без ховера, то просто удалить или закоментить if else

$(function(){ 
  
	$('.wrapper').addClass('active');

  $('.album-slider').slick({
    vertical: true,
    slidesToShow:3,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          vertical: false,
          verticalSwiping: false,
        } 
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow:2,
          vertical: false,
          verticalSwiping: false,
        } 
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          vertical: false,
          verticalSwiping: false,
        }   
      },
    ]
   
  });

  $('.partners__slider').slick({
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
  }); 

  $('.menu-burger').on('click', function() {
    $('.menu-burger').toggleClass('menu-burger--active');
    $('.menu__list').toggleClass('menu__list--active');
    $('body').toggleClass('no-scroll');
  });

  $('.menu__link').on('click', function() {
    $('.menu-burger').removeClass('menu-burger--active');
    $('.menu__list').removeClass('menu__list--active');
    $('body').removeClass('no-scroll');
  });

  // $('.arrow').on('click', function() {
  //   $('.sub-menu').css('display', 'block');
  // });

  $(window).scroll(function(){
    if ($(document).scrollTop() > 150) {
      $(".header__top").addClass("header--scroll");
    } else {
      $(".header__top").removeClass("header--scroll");
    }
  });
 
});



