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
	
    $(".acesso_menuzin").click(function(){
        $(".texto").toggle(1, function(){
        });
        $(".box_menuzin").toggle(1, function(){
        });
    });	
	$(".acesso_menuzin_form").click(function() {
		$(".box_menuzin").css("display", "block");	
		$(".form").css("display", "none");
		$(".acesso_menuzin").css("display", "inline-block");	
		$(".acesso_menuzin_form").css("display", "none");	
	});
	$(".acesso_menuzin_form_2").click(function() {
		$(".box_menuzin").css("display", "block");	
		$(".form").css("display", "none");
		$(".acesso_menuzin").css("display", "inline-block");	
		$(".acesso_menuzin_form_2").css("display", "none");	
	});
	/*
	$(".fire_form_pq").click(function(){
		$(".box_menuzin").toggle(1, function(){
		});
		$(".form").toggle(1, function(){
		});
	});
	*/

	$('.resume').click(function(){
		var popup = window.open('others/ricardo.ferrari_resume.pdf', '_blank');
		var dom = popup.document.body;
	});
	$('.curriculo').click(function(){
		var popup = window.open('others/ricardo.ferrari_curriculo.pdf', '_blank');
		var dom = popup.document.body;
	});
	
});

$(window).load(function() {
//para o Safari no iPhone:
	function isiPhone(){
		return (
			(navigator.platform.indexOf("iPhone") != -1)     );
		}
		if(isiPhone()){
			$(".container_english").css("top", "1em");
			$(".container_portugues").css("top", "1em");
			$(".box_menuzin").css("top", "2.5em");					
	}
//
		
	$(".fire_form_pq").click(function() {
		$(".acesso_menuzin").css("display", "none");	
		$(".acesso_menuzin_form").css("display", "inline-block");	
		$(".form").css("display", "block");	
		$(".box_menuzin").css("display", "none");	
	});
    $(".fire_form").click(function(){
		$(".acesso_menuzin").css("display", "none");	
		$(".acesso_menuzin_form_2").css("display", "inline-block");	
		$(".form").css("display", "block");	
		$(".box_menuzin").css("display", "none");		
		$(".texto").css("display", "none");
		$(".texto_2").css("display", "none");		
    });		
});

$( window ).resize(function() {
	if	(($('.form').css('display') == 'block') || ($('.box_menuzin').css('display') == 'block') &&	($(window).width() <= 600))	{
			$('.texto').css('display', 'none');
	}
	else	{
			$(".texto").css("display", "block");				
	}
});

/*
if ($('.form').css('display') !== 'none')	{
		    alert("The paragraph was clicked.");
}
*/	
	
		/*
		else	{
			$(".container_english").css("top", "0em");
		}

/*
		*/
