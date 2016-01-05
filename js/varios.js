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
        $("#texto").toggle(1, function(){
        });
        $("#box_menuzin").toggle(1, function(){
        });
    });

	$('.resume').click(function(){
	 var popup = window.open('others/ricardo.ferrari_resume.pdf', '_blank');
		var dom = popup.document.body;
	});
	
	//para o safari:
	$(document).scrollTop(0);

});