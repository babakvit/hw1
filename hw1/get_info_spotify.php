<?php 
    if (isset($_GET['cerca'])){
        // App key
    $client_id =     "d4c860fba30d49e5ad6cce24a046379b";
    $client_secret = "5174c572bd624d8588ce342797b766a4";

    // Richiesta token
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://accounts.spotify.com/api/token");
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, "grant_type=client_credentials");
    $headers = array("Authorization: Basic ".base64_encode($client_id.":".$client_secret));
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    /*echo $result."<br>";
    echo "<pre>";
    print_r(json_decode($result));
    echo "</pre>";
    curl_close($curl);*/
    
    // Utilizzo
    $token = json_decode($result)->access_token;
    $x = $_GET['cerca'];
    $data = http_build_query(array("q" => $x, "type" => "playlist"));
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://api.spotify.com/v1/search?".$data);
    $headers = array("Authorization: Bearer ".$token);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    curl_close($curl);
    //echo $result."<br>";
    //echo "<pre>";
    //print_r($result);
    //echo "</pre>";
    echo json_encode(json_decode($result));
    }
    else{
        echo json_encode("errore");
    }
    
?>