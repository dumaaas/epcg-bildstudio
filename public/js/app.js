//initializing new Wow object on load of window
$(window).on('load', function () {
    new WOW().init();
});

//document ready
$(document).ready(function () {


    //to avoid exepction on Lighthouse report for passive listeners
    jQuery.event.special.touchstart = {
        setup: function (_, ns, handle) {
            this.addEventListener("touchstart", handle, {
                passive: true
            });
        }
    };

    //functions on click
    $(function () {
        //adding/removing active class from header links
        $("header a").click(function () {
            // remove classes from all
            $("header a").removeClass("activeHeader");
            // add class to the one we clicked
            $(this).addClass("activeHeader");
        });

        //adding/removing active class from navigation links
        $(".navigation a").click(function () {
            // remove classes from all
            $(".navigation a").removeClass("activeNav");
            // add class to the one we clicked
            $(this).addClass("activeNav");
        });
    });

    //hide all answers from seciton 5 when document is ready
    $(".answers").hide();

    //this code was needed so we can show svg icons
    $('img[src$=".svg"]').each(function () {
        var $img = jQuery(this);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            // Loop through IMG attributes and apply on SVG
            $.each(attributes, function () {
                $svg.attr(this.name, this.value);
            });

            // Replace IMG with SVG
            $img.replaceWith($svg);
        }, 'xml');
    });

    //show answer when we click + and replace + with -
    $(".openDiv").click(function () {
        var num = this.id.match(/\d+/)[0];
        $("#faq_" + num).toggleClass('opened');
        $("#answer_" + num).slideToggle();
        $(".question_" + num).toggleClass('toggleUnderline');
    });

    $('.openDiv').mouseover(function () {
        var num = this.id.match(/\d+/)[0];
        $('.question_' + num).addClass('underlineHover');
    });

    $('.openDiv').mouseout(function () {
        var num = this.id.match(/\d+/)[0];
        $('.question_' + num).removeClass('underlineHover');
    });

    //Go through each carousel on the page
    $('.owl-carousel').each(function () {
        //Find each set of dots in this carousel
        $(this).find('.owl-dot').each(function (index) {
            //Add one to index so it starts from 1
            $(this).attr('aria-label', index + 1);
        });
    });

    //open and close hamburger menu
    $(function () {
        var hamburger = $('#hamburger');
        var menu = $('#menu');
        hamburger.on('click', function () {
            console.log(menu);
            if (menu.hasClass('hidden')) {
                menu.removeClass('hidden');
                hamburger.addClass('change');
                $('body').attr('style', 'overflow:hidden;');
            } else {
                hamburger.removeClass('change');
                menu.addClass('hidden');
                $('body').removeAttr('style');
            }
        });
    });

    //slider1
    $('.slider1').owlCarousel({
        loop: true,
        lazyLoad: true,
        items: 1,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        margin: 10,
        dots: true,
        touchDrag: false,
        mouseDrag: false,
        responsive: {
            // 0: {
            //     autoHeight: true,
            // },
            // 1024: {
            //     stagePadding: 300,
            //     margin: 160,
            //     dots: true,
            //     dotsData: true,
            // },
            // 1280: {
            //     stagePadding: 300,
            //     margin: 200,
            // },
            // 1536: {
            //     stagePadding: 400,
            //     margin: 160,
            // }
            768: {
                margin: 150,
            }
        }
    });

    // var owl = $('.slider1');
    // var effectsIn =
    //     'animationEnd oAnimationEnd mozAnimationEnd webkitAnimationEnd';
    // owl.on('changed.owl.carousel', function (event) {
    //     $('.slider-title')
    //         .addClass('fadeIn')
    //         .one(effectsIn, function () {
    //             $('.slider-title').removeClass('fadeIn');
    //         });
    // });

    //slider2
    $('.slider2').owlCarousel({
        nav: true,
        lazyLoad: true,
        loop: true,
        items: 1,
        smartSpeed: 1200,
        navText: ["", "<svg class='mx-auto' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='42' height='42' viewBox='0 0 172 172' style=' fill:#000000;'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g fill='#2bb7e5'><path d='M113.88281,49.88672l-7.55859,7.72656l23.01172,23.01172h-107.83594v10.75h107.83594l-23.01172,23.01172l7.55859,7.72656l36.11328,-36.11328z'></path></g></g></svg>"],
        margin: 24,
        touchDrag: false,
        mouseDrag: false,
        dots: true,
        responsive: {
            0: {
                navText: ["", "<svg class='mx-auto' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='42' height='42' viewBox='0 0 172 172' style=' fill:#000000;'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g fill='#ffffff'><path d='M113.88281,49.88672l-7.55859,7.72656l23.01172,23.01172h-107.83594v10.75h107.83594l-23.01172,23.01172l7.55859,7.72656l36.11328,-36.11328z'></path></g></g></svg>"],
            },
            // 1024: {
            //     stagePadding: 300,
            //     margin: 160,
            //     dots: true,
            //     dotsData: true,
            // },
            1280: {
                navText: ["", "<svg class='mx-auto' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='42' height='42' viewBox='0 0 172 172' style=' fill:#000000;'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g fill='#2bb7e5'><path d='M113.88281,49.88672l-7.55859,7.72656l23.01172,23.01172h-107.83594v10.75h107.83594l-23.01172,23.01172l7.55859,7.72656l36.11328,-36.11328z'></path></g></g></svg>"],
                margin: 24,
                dots: false,
                // center: true,
                mouseDrag: true,
                autoWidth: true,
                stagePadding: 200


            },
            1536: {
                navText: ["", "<svg class='mx-auto' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='42' height='42' viewBox='0 0 172 172' style=' fill:#000000;'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g fill='#2bb7e5'><path d='M113.88281,49.88672l-7.55859,7.72656l23.01172,23.01172h-107.83594v10.75h107.83594l-23.01172,23.01172l7.55859,7.72656l36.11328,-36.11328z'></path></g></g></svg>"],
                margin: 24,
                autoWidth: true,
                dots: false,
                stagePadding: 310,
                center: true,
            }
        }
    });
    //slider3
    $('.slider3').owlCarousel({
        nav: true,
        loop: true,
        lazyLoad: true,
        items: 1,
        smartSpeed: 1200,
        navText: ["", "<svg class='mx-auto' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='42' height='42' viewBox='0 0 172 172' style=' fill:#000000;'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g fill='#2bb7e5'><path d='M113.88281,49.88672l-7.55859,7.72656l23.01172,23.01172h-107.83594v10.75h107.83594l-23.01172,23.01172l7.55859,7.72656l36.11328,-36.11328z'></path></g></g></svg>"],
        autoplayHoverPause: true,
        margin: 10,
        dots: true,
        touchDrag: false,
        mouseDrag: false,
        responsive: {
            0: {
                navText: ["", "<svg class='mx-auto' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='42' height='42' viewBox='0 0 172 172' style=' fill:#000000;'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g fill='#2bb7e5'><path d='M113.88281,49.88672l-7.55859,7.72656l23.01172,23.01172h-107.83594v10.75h107.83594l-23.01172,23.01172l7.55859,7.72656l36.11328,-36.11328z'></path></g></g></svg>"],

            },
            // 1024: {
            //     stagePadding: 300,
            //     margin: 160,
            //     dots: true,
            //     dotsData: true,
            // },
            1280: {
                items: 2,
                margin: 24,
                navText: ["<svg class='mx-auto' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='42' height='42' viewBox='0 0 172 172' style=' fill:#000000;'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g fill='#2bb7e5'><path d='M58.11719,49.88672l-36.11328,36.11328l36.11328,36.11328l7.55859,-7.72656l-23.01172,-23.01172h107.83594v-10.75h-107.83594l23.01172,-23.01172z'></path></g></g></svg>", "<svg class='mx-auto' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='42' height='42' viewBox='0 0 172 172' style=' fill:#000000;'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g fill='#ffffff'><path d='M113.88281,49.88672l-7.55859,7.72656l23.01172,23.01172h-107.83594v10.75h107.83594l-23.01172,23.01172l7.55859,7.72656l36.11328,-36.11328z'></path></g></g></svg>"],

            },
            1536: {
                items: 2,
                margin: 24,
                navText: ["<svg class='mx-auto' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='42' height='42' viewBox='0 0 172 172' style=' fill:#000000;'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g fill='#2bb7e5'><path d='M58.11719,49.88672l-36.11328,36.11328l36.11328,36.11328l7.55859,-7.72656l-23.01172,-23.01172h107.83594v-10.75h-107.83594l23.01172,-23.01172z'></path></g></g></svg>", "<svg class='mx-auto' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='42' height='42' viewBox='0 0 172 172' style=' fill:#000000;'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g fill='#ffffff'><path d='M113.88281,49.88672l-7.55859,7.72656l23.01172,23.01172h-107.83594v10.75h107.83594l-23.01172,23.01172l7.55859,7.72656l36.11328,-36.11328z'></path></g></g></svg>"],

            }
        }
    });



});