// JavaScript Document
$(document).ready(function() {
/*IDIOMAS*/ /*SHOW/HIDE*/ /*SHOW DIV APAGADA E HIDE DIV CENTRAL ABERTURA*/
	$("#botao_english").click(function() {
	    $("#logo_menu_idiomas").hide();
	    $('head').append('<link rel="stylesheet" href="css/blur.css" type="text/css" />');
		$('head').append('<link rel="stylesheet" href="css/english.css" type="text/css" />');
	});
	$("#botao_portugues").click(function() {
	    $("#logo_menu_idiomas").hide();
	    $('head').append('<link rel="stylesheet" href="css/blur.css" type="text/css" />');
		$('head').append('<link rel="stylesheet" href="css/portugues.css" type="text/css" />');
	});
	

});

 $(window).bind("scroll", function() {  
   if ($(this).scrollTop() > 30) { //Fade in at a level of height
     $("#bg_fundo_top").fadeIn();  
     checkOffset(); //Call function
   } else {  
     $("#bg_fundo_top").stop().fadeOut();  
   }  
 });  
 function checkOffset() {  
   if($('#bg_fundo_top').offset().top + $('#bg_fundo_top').height() >= $('#container_english').offset().top) {  
     $('#bg_fundo_top').css('position', 'fixed'); //Stop div at a level of height
   }  
   if($(window).scrollTop() + $(window).height() < $('#container_english').offset().top) {  
     $('#bg_fundo_top').css('position', 'fixed'); //Restore when you scroll up  
   }  
 }  


 /*
	$( "#botao_english" ).on( "load", function() {
	$( this ).css( "pointer-events", "auto" );
});*/

/*
var viudeo = document.getElementById("video1");
function toca() { 
	viudeo.play(); 
}
*/


/*
function toggle(obj) {
	$( "#botao_english" ).css( "pointer-events", "none" );	
	if ( botao_espanol.style.opacity = '100' ) {
		botao_portuguese.style."pointer-events" = 'visible';
	}
}
*/