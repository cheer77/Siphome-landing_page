$(function () {


    $('.mobile__btn').on('click', function (event) {
        $('.mobile__btn, .header-top__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });



    var header = document.getElementById("menu");
    var btns = header.getElementsByClassName("header-top__items");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("header-top__items--active");
            current[0].className = current[0].className.replace(" header-top__items--active", "");
            this.className += " header-top__items--active";
        });
    }

    $('.service-slider').slick({
        dots: true,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });

    $('.testimonials__inner').slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 833,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });



});