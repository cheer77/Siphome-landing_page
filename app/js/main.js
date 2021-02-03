$(function () {


    $('.mobile__btn').on('click', function (event) {
        $('.mobile__btn, .header-top__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.singin, .login__close').on('click', function (event) {
        $('.login').toggleClass('active');
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



});