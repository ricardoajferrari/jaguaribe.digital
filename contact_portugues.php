<?php
if($_POST)
{
	$to_email   	= "ricardoajferrari2@gmail.com"; //Recipient email, Replace with own email here
	$subject   	= "jaguaribe.digital - Contato pelo site";

	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
		
		$output = json_encode(array( //create JSON data
			'type'=>'error', 
			'text' => 'Sorry Request must be Ajax POST'
		));
		die($output); //exit script outputting json data
    } 
	
	//Sanitize input data using PHP filter_var().
	$user_name_pt		= filter_var($_POST["user_name_pt"], FILTER_SANITIZE_STRING);
	$user_email_pt		= filter_var($_POST["user_email_pt"], FILTER_SANITIZE_EMAIL);
	$message_pt			= filter_var($_POST["msg_pt"], FILTER_SANITIZE_STRING);
	
	//email body
	$message_body = "Menssagem : ".$message_pt."\r\n\r\nNome : ".$user_name_pt."\r\nEmail : ".$user_email_pt ;
	
	//proceed with PHP email.
	$headers = 
	'From: '.$user_name_pt.'' . "\r\n" .
	'Subject: '.$subject.'' . "\r\n" .//does not work if there is space in the name
	'Reply-To: '.$user_email_pt.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	$send_mail = mail($to_email, $subject, $message_body, $headers);
	
	if(!$send_mail)
	{
		//If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
		$output = json_encode(array('type'=>'error', 'text' => 'Desculpe, o formulário não pode ser enviado.<br>Peço que use o seguinte endereço de e-mail.&nbsp;<font style="font-weight: normal"><a href="mailto:jaguaribe@jaguaribe.digital">jaguaribe@jaguaribe.digital</a></font>&nbsp;Obrigado.<br>'));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => 'Olá '.$user_name_pt.'<br><br>Obrigado pelo seu contato.<br>Retorno a você assim que puder.'));
		die($output);
	}
}
?>