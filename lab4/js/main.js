$(document).ready(function(){
	$( ".form2" ).hide();
    $( ".form1" ).hide();
    $( ".form1" ).show(400);
	$(".button1").addClass("active");
	$(".button1").click(function(){
    $(".button1").addClass("active");
    $(".button2").removeClass("active");
    $( ".form1" ).show(400);
    $( ".form2" ).hide();
});
	$(".button2").click(function(){
    $(".button2").addClass("active");
    $(".button1").removeClass("active");
    $( ".form1" ).hide();
    $( ".form2" ).show(400);
});
});
$(window).scroll(function(){
    $('.about>h2').each(function(){
        var elPosition = $(this).offset().top;
        var elHeight = $(this).height();
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (elPosition < windowTop + windowHeight - elHeight) {
            $(this).addClass("animation bounce");
        }
        if (elPosition > windowTop + windowHeight ) {
            $(this).removeClass("animation bounce");
        }
        if (elPosition + elHeight < windowTop ) {
            $(this).removeClass("animation bounce");
        }
    });
    $('.advantage>img').each(function(){
        var elPosition = $(this).offset().top;
        var elHeight = $(this).height();
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (elPosition < windowTop + windowHeight - elHeight) {
            $(this).addClass("animation pulse");
        }
        if (elPosition > windowTop + windowHeight ) {
            $(this).removeClass("animation pulse");
        }
        if (elPosition + elHeight < windowTop ) {
            $(this).removeClass("animation pulse");
        }
    });
    $('.contact>a').each(function(){
        var elPosition = $(this).offset().top;
        var elHeight = $(this).height();
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (elPosition < windowTop + windowHeight - elHeight) {
            $(this).addClass("animation heartbeat");
        }
        if (elPosition > windowTop + windowHeight ) {
            $(this).removeClass("animation heartbeat");
        }
        if (elPosition + elHeight < windowTop ) {
            $(this).removeClass("animation heartbeat");
        }
    });
});
