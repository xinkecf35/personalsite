$(document).ready(function () {
    $("nav ul li a").click(function (event) {
        event.preventDefault();
        var navHeight = $("nav").height();
        var requestedDiv = $(this).attr("href");
        var scrollToDiv = $(requestedDiv).offset().top - navHeight;
        console.log(scrollToDiv);
        $("html, body").stop();
        $("html, body").animate({scrollTop: scrollToDiv}, 1500, "easeOutCubic");
    });
});
