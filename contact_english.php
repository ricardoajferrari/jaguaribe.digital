<?php
if($_POST)
{
	$to_email   	= "ricardoajferrari2@gmail.com"; //Recipient email, Replace with own email here
	$subject   	= "jaguaribe.digital - Contact from site";

	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
		
		$output = json_encode(array( //create JSON data
			'type'=>'error', 
			'text' => 'Sorry Request must be Ajax POST'
		));
		die($output); //exit script outputting json data
    } 
	
	//Sanitize input data using PHP filter_var().
	$user_name		= filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
	$user_email		= filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL);
	$message		= filter_var($_POST["msg"], FILTER_SANITIZE_STRING);
	
	//email body
	$message_body = "Message : ".$message."\r\n\r\nName : ".$user_name."\r\nEmail : ".$user_email ;
	
	//proceed with PHP email.
	$headers = 
	'From: '.$user_name.'' . "\r\n" .
	'Subject: '.$subject.'' . "\r\n" .//does not work if there is space in the name
	'Reply-To: '.$user_email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	$send_mail = mail($to_email, $subject, $message_body, $headers);
	
	if(!$send_mail)
	{
		//If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
		$output = json_encode(array('type'=>'error', 'text' => 'I apologize, the form could not be sent.<br>Please use the following email address:&nbsp;<font style="font-weight: normal"><a href="mailto:jaguaribe@jaguaribe.digital">jaguaribe@jaguaribe.digital</a></font>&nbsp;Thank you.<br>'));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_name.'<br><br>Thank you for your contact.<br>I will get back to you ASAP.'));
		die($output);
	}
}
?>