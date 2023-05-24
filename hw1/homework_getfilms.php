<?php 
    session_start();
    $dati = $_SESSION['username'];
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "http://localhost/hw1/api_films.php?username=".$dati);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    curl_close($curl);
    echo $result;
?>