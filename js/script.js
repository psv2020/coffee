// === табы
$(document).ready(function() {
    $('.tabs-triggers__item').click(function(e){
        e.preventDefault();

        $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
        $('.tabs-content__item').removeClass('tabs-content__item--active');

        $(this).addClass('tabs-triggers__item--active');
        $($(this).attr('href')).addClass('tabs-content__item--active');
    });

    $('.tabs-triggers__item:first').click();
});

// === гамбургер
 
$(function() {
    $("#hamburger").click((e) => {
        e.preventDefault();

        $("#hamburger").toggleClass('is-active');

        $("#mobile__nav").fadeToggle(300);
    });
});

const swiper = new Swiper('.combo-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  