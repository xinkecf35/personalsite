$(document).ready(function () {
    var nav = $("nav");
    var about = $("#about");
    var height = about.offset().top;
    $(window).scroll(function (event) {
        if ($(window).scrollTop() + 5 > height) {
            nav.addClass("fix-nav");
        } else {
            nav.removeClass("fix-nav");
        }
    });
});
