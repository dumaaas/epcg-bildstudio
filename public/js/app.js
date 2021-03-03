$(document).ready(function() {
    $(".answers").hide();
    $('img[src$=".svg"]').each(function() {
        var $img = jQuery(this);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            // Loop through IMG attributes and apply on SVG
            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });

            // Replace IMG with SVG
            $img.replaceWith($svg);
        }, 'xml');
    });

    $(".faqOpen").click(function() {
        var num = this.id.match(/\d+/)[0];
        console.log($("#faq_" + num).innerText);
        if ($("#faq_" + num).text() == "+") {
            console.log($("answer_" + num).text());
            $("faq_" + num).text() == "-";
        } else {
            $("#faq_" + num).text() == "+";
        }

        $("#answer_" + num).toggle();
    });

    //slider1
    $('.slider1').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        margin: 10,
        dots: true,
        responsive: {
            // 0: {

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

    //slider2
    $('.slider2').owlCarousel({
        nav: true,
        loop: true,
        items: 1,
        smartSpeed: 1200,
        navText: ["<img src='img/slider2-nav.png' class='mx-auto' loading='lazy' alt='ecpg'>", "<img src='img/slider2-nav.png' class='mx-auto' loading='lazy' alt='ecpg'>"],
        autoplayHoverPause: true,
        margin: 10,
        dots: true,
        responsive: {
            // 0: {

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
        }
    });
    //slider3
    $('.slider3').owlCarousel({
        nav: true,
        loop: true,
        items: 1,
        smartSpeed: 1200,
        navText: ["<img src='img/slider3-nav.png' class='mx-auto' loading='lazy' alt='ecpg'>", "<img src='img/slider3-nav.png' class='mx-auto' loading='lazy' alt='ecpg'>"],
        autoplayHoverPause: true,
        margin: 10,
        dots: true,
        responsive: {
            // 0: {

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
        }
    });

});