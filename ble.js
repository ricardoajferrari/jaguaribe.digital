// JavaScript Document

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