// JavaScript Document
$(document).ready(function() {
    $("#submit_btn").click(function() { 

	    var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields		
		$("#contact_form input[required_JS=true], #contact_form textarea[required_JS=true]").each(function(){
			$(this).css('border-color',''); 
			if(!$.trim($(this).val())){ //if this field is empty 
				$(this).css('border-color','red');
				$(this).css('border-width','medium');
				//alert("Please fill this field");   
				proceed = false; //set do not proceed flag
			}
			//check invalid email
			var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/; 
			if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
				$(this).css('border-color','red');
				$(this).css('border-width','medium');
				//alert("Please fill this field with a valid email address");   
				proceed = false; //set do not proceed flag				
			}	
		});

        if(proceed) //everything looks good! proceed...
        {
			//get input field values data to be sent to server
            post_data = {
				'user_name'		: $('input[name=name]').val(), 
				'user_email'	: $('input[name=email]').val(), 
				'msg'			: $('textarea[name=message]').val()
			};
            
            //Ajax post data to server
            $.post('contact_english.php', post_data, function(response){  
				if(response.type == 'error'){ //load json data from server and output message     
					output = '<div class="error">'+response.text+'</div>';
				}else{
				    output = '<div class="success">'+response.text+'</div>';
					//reset values in all input fields
					$("#contact_form  input[required_JS=true], #contact_form textarea[required_JS=true]").val(''); 
					$("#contact_form #contact_body").slideUp(); //hide form after success
				}
				$("#contact_form #contact_results").hide().html(output).slideDown();
				$("#email_address").css("display", "none");	
            }, 'json');
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form  input[required_JS=true], #contact_form textarea[required_JS=true]").keyup(function() { 
        $(this).css('border-color',''); 
        $("#result").slideUp();
    });
});