// JavaScript Document

// Controle fundo portugues
 $(window).bind("scroll", function() {  
   if ($(this).scrollTop() > 30) { //Fade in at a level of height
     $("#bg_fundo_top_portugues").fadeIn();  
     checkOffset_portugues(); //Call function
   } else {  
     $("#bg_fundo_top_portugues").stop().fadeOut();  
   }  
 });  
 function checkOffset_portugues() {  
   if($('#bg_fundo_top_portugues').offset().top + $('#bg_fundo_top_portugues').height() >= $('#container_portugues').offset().top) {  
     $('#bg_fundo_top_portugues').css('position', 'fixed'); //Stop div at a level of height
   }  
   if($(window).scrollTop() + $(window).height() < $('#container_portugues').offset().top) {  
     $('#bg_fundo_top_portugues').css('position', 'fixed'); //Restore when you scroll up  
   }  
 }  