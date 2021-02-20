<?php 

$name = $_POST['name']; // Значение в атрибуте name в input для имени
$phone = $_POST['number']; // Значение в атрибуте name в input для номера
$email = $_POST['email']; // Значение в атрибуте name в input для почты

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               

$mail->isSMTP();                                     
$mail->Host = 'smtp.mail.ru';             // Если gmail тогда 'smtp.gmail.com'
$mail->SMTPAuth = true;                               
$mail->Username = 'message.shop@mail.ru'; // С какой почты будет отправляться письмо.
$mail->Password = 'Marat52712';           // Пароль с какой почты будет отправляться письмо.
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;                        // TCP port to connect to
 
$mail->setFrom('message.shop@mail.ru', 'Заявка');  // С какой почты будет отправляться письмо.
$mail->addAddress('maratoid@mail.ru');    // На какой адрес будет отправляться письмо.
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>