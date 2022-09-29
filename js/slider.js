/*슬라이더 JS*/
$(function () {

    function prev() {
        $('.sliders li:last').prependTo('.sliders');
        $('.sliders').css({ marginLeft: -1520 });
        $('.sliders').stop().animate({ marginLeft: 0 }, 800);
    }

    function next() {
        $('.sliders').stop().animate({ marginLeft: -1520 }, function () {
            $('.sliders li:first').appendTo('.sliders');
            $('.sliders').css({ marginLeft: 0 });
        });
    }

    function slide() {
        $('.sliders').stop().animate({ marginLeft: -1520 }, function () {
            $('.sliders li:first').appendTo('.sliders');
            $('.sliders').css({ marginLeft: 0 });
        });
    }

    setInterval(slide, 3000);

    $('.prev').click(function () {
        prev();
    });

    $('.next').click(function () {
        next();
    });

});