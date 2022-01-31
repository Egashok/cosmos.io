$(function(){
    $('.slider__box').slick({
        prevArrow:'<img class="slider__arrow left" src="images/Arl.svg">',
        nextArrow:'<img class="slider__arrow right" src="images/Arr.svg">',
    });
    $('.menu-btn').on('click',function(){
        $('.menu__list').toggleClass('active');
      
    })
});