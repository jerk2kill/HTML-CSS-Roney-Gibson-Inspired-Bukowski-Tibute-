$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__bar').toggleClass("active");
        $('body').toggleClass("locked");
    })
    $('.things__box').slick({
        dots: true,
        infinite: false,
        arrows:true,
        initialSlide: 1,
        adaptiveHeight : false,
        centerMode: true,
        touchTreshold: 5,
        variableWidth: true,
        swipeToSlide:true,
        touchMove:true,
        waitForAnimate:false
    })
})