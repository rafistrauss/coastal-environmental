<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $headers = "From: new-contact@coastal-enviro.com" . "\r\n" . "Reply-To: $email" . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    $headers .= 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    
    $subject = "New contact form submission.";

    $message = "$subject <br /><br />
    <b>Name:</b> $name <br />
    <b>Email:</b> $email <br />
    <b>Phone:</b> $phone <br />";
    
    mail('rafikis75@gmail.com', $subject, $message, $headers);

?>