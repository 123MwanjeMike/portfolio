<?php
if (isset($_POST['email'])) {

    $email_to = "mwanjemike767@gmail.com";
    $email_subject = "New form submissions from your page";

    $fname = $_POST['fname']; // required
    $lname = $_POST['lname']; // required
    $email = $_POST['email']; // required
    $message = $_POST['message']; // required

    $email_message = "Form details below.\n\n";

    $email_message .= "First name: " .$fname . "\n";
    $email_message .= "Last name: " .$lname . "\n";
    $email_message .= "Email: " .$email . "\n";
    $email_message .= "Message: " .$message . "\n";

    echo $email_message;

    // create email headers
    $headers = 'From: ' . $email . "\r\n";
    mail($email_to, $email_subject, $email_message, $headers);
}
?>