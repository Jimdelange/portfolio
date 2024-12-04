<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $naam = $_POST['naam'];
    $email = $_POST['email'];
    $onderwerp = $_POST['onderwerp'];
    $bericht = $_POST['bericht'];

    $to = "jimdelange.dev@outlook.com";
    $subject = "Nieuw bericht van " . $naam;
    $message = "Naam: " . $naam . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Onderwerp: " . $onderwerp . "\n\n";
    $message .= "Bericht:\n" . $bericht;

    $headers = "Van: " . $email;

    if (mail($to, $subject, $message, $headers)) {
        echo "Bericht verzonden!";
    } else {
        echo "Er is iets mis gegaan bij het versturen van je bericht.";
    }
}
?>
