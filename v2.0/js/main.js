$(function() {
    var $header = $('#header');
    var change_header_position = $("#top").height() - $("#header").outerHeight(true);

    // Smooth Scroll
    $('a[href^="#"]').click(function() { // 'a' tag clicked
        var speed = 1500; // scroll speed: mm/second
        var href= $(this).attr("href"); // anker
        
        var header_height = $("#header").height(); // header height
        var target = $(href == "#" || href == "" ? 'html' : href); // moving target

        var position = target.offset().top - header_height; // fix value
        
        $('body,html').animate({scrollTop:position}, speed, 'swing'); // scroll
        return false;
    });

    // Navigation Fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > change_header_position) { 
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });
    // Toggle Button Clicked
    $('.toggle').click(function(){
        $header.toggleClass('open');
        // Global Navigation
        if ( $('#header').hasClass('open') ) {
            $('.nav').slideDown();
            $('.nav').css('display','block');
        } else {
            $('.nav').slideUp(function() {
                $('.nav').css('display','none');
            });
        }
    });
    // Global Navigation Links
    $('.nav li a').on('click', function(event){
        $('.toggle').trigger('click');
    });

    // Header Fixed
    var change_header_position = $("#header").outerHeight(true);
    $(window).scroll(function() {
        if ($(window).scrollTop() > change_header_position) { 
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });

    // Page Top Button Fixed
    var $page_top_btn = $('.page_top_btn');
    var change_page_top_btn_position = 500;
    $(window).scroll(function() {
        if ($(window).scrollTop() > change_page_top_btn_position) {
            $page_top_btn.addClass('fixed');
        } else {
            $page_top_btn.removeClass('fixed');
        }

    });
});