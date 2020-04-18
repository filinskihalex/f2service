$(document).ready(function(){
	$(".menu li ul").hide();
	$(".menu li:has('.menu-drop')").hover(
	  function(){
	  $(".menu li ul").stop().fadeToggle(300);}
	);
});



