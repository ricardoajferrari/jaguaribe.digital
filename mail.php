<?php
$message = "Testando outros remetentes, para facilitar a resposta";
$headers = 'From: e2mkt@e2mkt.com.br';// <- O e-mail que está configurado no .htaccess
$headers = 'Date:'.date('r');

if (mail('ricardoajferrari@gmail.com', 'Teste', $message, $headers)) {
	print('Funcionou');
}else{ 
	print('Nao Funcionou...');

};
?>