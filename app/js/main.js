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
        // slidesToShow: 2,
        centerMode: true,
        centerPadding: '60px',
        // variableWidth: true
        adaptiveHeight: true,
        // responsive: [
        //     {
        //         breakpoint: 450,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 2,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        // ]
        // autoplay: true,
        // autoplaySpeed: 2000,
        // prevArrow: '<button class="btn btn__next">Вперед</button>',
        // nextArrow: '<button class="btn btn__prev">Назад</button>',
    });



});