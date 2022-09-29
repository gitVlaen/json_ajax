// »óÇ° 1 JS
$(function () {
    $.ajax({
        url: "./js/item_1.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".article1").eq(i).append('<a href="sub.html" target="_self">' + "<img src='img/" + data[i].url + "'/>" + '</a>');
                    $(".article1").eq(i).append('<h5><a href="sub.html" target="_self">' + data[i].title + "</a></h5>");
                    $(".article1").eq(i).append("<span>" + data[i].subtitle + "</span>");
                    $(".article1").eq(i).append("<p>" + data[i].price + "</p>");
                }
            }
        }
    });
});
