$(document).ready(function () {
    $("nav ul li a").click(function (event) {
        event.preventDefault();
        var requestedDiv = $(this).attr("href");
        var scrollToDiv = $(requestedDiv).offset().top;
        $("html, body").stop();
        $("html, body").animate({scrollTop: scrollToDiv}, 1500, "easeOutCubic");
    });
});
