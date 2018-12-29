$(function () {

    var btnMenuMobile =$('.menu-button');
    var bannerClick =$('.header-bottom');
    btnMenuMobile.on('click',function () {
        $('.nav').toggleClass('nav-on');
        $('.header-bottom').toggleClass('banner-content-direction')
            .toggleClass('banner-hide-show');
    });

    bannerClick.on('click',function () {
        $('.nav').removeClass('nav-on');
        $('.header-bottom').removeClass('banner-content-direction')
            .removeClass('banner-hide-show');
    });

});