$(function () {
    
window.sr = ScrollReveal({ reset: true, duration: 1500 }).reveal('.container, .row');
    
    if ($(window).scrollTop() >= 50) {

        $('#main_nav').addClass('scroll')


    } else {
        $('#main_nav').removeClass('scroll')

    }
    
$(window).scroll(function () {

    if ($(window).scrollTop() >= 50) {

        $('#main_nav').addClass('scroll')


    } else {
        $('#main_nav').removeClass('scroll')

    }
});
    
var root = $('html, body');
$('a[href^="#"]').click(function () {
    var href = $(this).attr('href');
    root.animate({
        scrollTop: $(href).offset().top - 52
    }, 500);

});


});
