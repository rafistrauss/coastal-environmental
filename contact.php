<?php 
    error_reporting(1);
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $comments = $_POST['comments'];

    $headers = "From: new-contact@coastal-enviro.com" . "\r\n" . "Reply-To: $email" . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    $headers .= 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    
    $subject = "New contact form submission.";

    $message = "$subject <br /><br />
    <b>Name:</b> $name <br />
    <b>Email:</b> $email <br />
    <b>Phone:</b> $phone <br />
    <b>Comments:</b> $comments <br />
    ";
    
    $success = mail('rafikis75@gmail.com', $subject, $message, $headers);
    if($success) {
        file_put_contents('log.log', 'Success', FILE_APPEND);
    }
    
else {
    $dateTime = date('M d, Y');

    $params = "Name: $name , email: $email , phone: $phone , comments: $comments ";

    file_put_contents('log.log', "$dateTime: Failed - " . var_dump($success) . " " . var_dump($params), FILE_APPEND);
    
}

?>