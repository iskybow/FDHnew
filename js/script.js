$(document).ready(function () {
    $('.jsMobileMenu').click(function () {
        $('.jsMenu').toggleClass('menu-show');
    });

    $("#calc_slider1").ionRangeSlider({
        min: 0,
        max: 6000000,
        step: 10000
    });
});