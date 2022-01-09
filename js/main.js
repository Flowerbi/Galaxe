$(function(){
  
  $('.new__slide-list').slick({
    arrows: false,
    slidesToShow: 5,
    centerMode: true,
    variableWidth: true,
    touchThreshold: 100,
    draggable: true,
    focusOnSelect: true,
  });

  $('.header__top-btn').on('click', function () {
    $('.header__top-social').toggleClass('header__top-social--active');
  });

  $('.header__top-social-btn').on('click', function () {
    $('.header__top-social').removeClass('header__top-social--active');
  });

});