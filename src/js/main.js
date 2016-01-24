$(document).ready(function() {
    "use strict";

    var headerHeight = 300;
    var navbarHeight = 50;

    $(window).scroll(function() {
        if($(window).scrollTop() >= (headerHeight - navbarHeight)) {
            $('nav').addClass('navbar-fixed-top');
        } else {
            $('nav').removeClass('navbar-fixed-top');
        }
        // TODO: fix active on scroll.
        $('a[href*="#"]').each(function () {
            if ($(this.hash).offset().top <= ($(window).scrollTop() + navbarHeight) && $(this.hash).offset().top + $(this.hash).height() > $(window).scrollTop()) {
                $('a').removeClass("active");
                $(this).addClass("active");
            }
            else{
                $(this).removeClass("active");
            }
        });
    });

    $('a[href*="#"]').click(function(e) {
        $(this).each(function () {
            $('a').removeClass('active');
        });
        $(this).addClass('active');
        $('html,body').stop().animate({
            scrollTop: $(this.hash).offset().top - ($(window).scrollTop() >= (headerHeight - navbarHeight) ? 50 : 100)
        }, 1000, function() {
            window.location.hash = this.hash;
        });
        e.preventDefault();
    });

    // TODO: Add progress animation.
    $(window).scroll(function() {
        var loaded = false;
    });

    // TODO: Add an modal.
});
