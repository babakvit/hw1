<?php
    print_r($_GET);
    $conn = mysqli_connect("localhost", "root","", "homework1") or die(mysqli_connect_error());
    if (isset($_GET['username'])){
        $username = mysqli_real_escape_string($conn, $_GET['username']);
        $query = "SELECT * FROM users WHERE username = '$username'"; 
        $res = mysqli_query($conn, $query);
        $row = mysqli_fetch_row($res);
        print_r(json_encode($row));
   }
   mysqli_free_result($res);
   mysqli_close($conn);
   
?>