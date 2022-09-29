//»óÇ° 3 JS
$(function () {
    $.ajax({
        url: "./js/item_3.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".article3").eq(i).append('<a href="sub.html" target="_self">' + "<img src='img/" + data[i].url + "'/>" + '</a>');
                    $(".article3").eq(i).append('<h5><a href="sub.html" target="_self">' + data[i].title + "</a></h5>");
                    $(".article3").eq(i).append("<span>" + data[i].subtitle + "</span>");
                    $(".article3").eq(i).append("<p>" + data[i].price + "</p>");
                }
            }
        }
    });
});
