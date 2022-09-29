/*네비게이션 JS*/
$(function () {
    $('.menu > li').mouseover(function () {
        $(this).children('.sub').stop().slideDown();
    }).mouseout(function () {
        $('.sub').stop().slideUp();
    });
});