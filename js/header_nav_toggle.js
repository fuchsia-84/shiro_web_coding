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
        // Global Nav
        if ( $('#header').hasClass('open') ) {
            $('#global_nav').slideDown();
            $('#global_nav').css({display: block})
        } else {
            $('#global_nav').slideUp();
            $('#global_nav').css({display: none})
        }
    });
    // Global Nav Links
    $('#global_nav li a').on('click', function(event){
        $('#nav_toggle').trigger('click');
    });
});