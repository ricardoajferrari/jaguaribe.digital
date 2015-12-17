// JavaScript Document

$(document).ready(function() {
	$("#botao_english").click(function() {
	    $("#logo_menu_idiomas").hide();
	    $('head').append('<link rel="stylesheet" href="css/blur.css" type="text/css" />');
		$('head').append('<link rel="stylesheet" href="css/english.css" type="text/css" />');
		$.getScript( "js/bg_fundo_top_english.js");

	});
	$("#botao_portugues").click(function() {
	    $("#logo_menu_idiomas").hide();
	    $('head').append('<link rel="stylesheet" href="css/blur.css" type="text/css" />');
		$('head').append('<link rel="stylesheet" href="css/portugues.css" type="text/css" />');
		$.getScript( "js/bg_fundo_top_portugues.js");
	});
	$(".acesso_menuzin").click(function() {
		$('head').append('<link rel="stylesheet" href="css/menuzin_english.css" type="text/css" />');
	});	
});

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