$(document).ready(function() {
    var nav = $("nav");
    var about = $("#about");
    var height = about.offset().top;
    console.log(height);
    $(window).scroll(function (event) {
        if($(window).scrollTop() > height) {
            nav.addClass("fix-nav",1500);
        }
        else{
            nav.removeClass("fix-nav",1500);
        }
    });
});
