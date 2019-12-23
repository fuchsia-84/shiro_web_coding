$(function() {
    var $header = $('#header');
    // Nav Fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > 556) { //top - header_height
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });
    // Nav Toggle Button
    $('#nav_toggle').click(function(){
        $header.toggleClass('open');
    });
});