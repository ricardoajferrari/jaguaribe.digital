// JavaScript Document

// Controle fundo english
 $(window).bind("scroll", function() {  
   if ($(this).scrollTop() > 30) { //Fade in at a level of height
     $("#bg_fundo_top_english").fadeIn();  
     checkOffset_english(); //Call function
   } else {  
     $("#bg_fundo_top_english").stop().fadeOut();  
   }  
 });  
 function checkOffset_english() {  
   if($('#bg_fundo_top_english').offset().top + $('#bg_fundo_top_english').height() >= $('#container_english').offset().top) {  
     $('#bg_fundo_top_english').css('position', 'fixed'); //Stop div at a level of height
   }  
   if($(window).scrollTop() + $(window).height() < $('#container_english').offset().top) {  
     $('#bg_fundo_top_english').css('position', 'fixed'); //Restore when you scroll up  
   }  
 }  