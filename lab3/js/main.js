$(document).ready(function(){
	$( ".form2" ).hide();
	$(".button1").addClass("active");
	$(".button1").click(function(){
    $(".button1").addClass("active");
    $(".button2").removeClass("active");
    $( ".form1" ).show();
    $( ".form2" ).hide();
});
	$(".button2").click(function(){
    $(".button2").addClass("active");
    $(".button1").removeClass("active");
    $( ".form1" ).hide();
    $( ".form2" ).show();
});
});