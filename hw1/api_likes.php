<?php 
   $conn = mysqli_connect("localhost", "root","", "homework1") or die(mysqli_connect_error());
   $eventi = array();
   $username = $_GET['username'];
   $query = "SELECT * FROM films WHERE id_film IN (SELECT id_film FROM likes WHERE username = '$username')";
        //mysqli_query($conn, $query); 
   
   $res = mysqli_query($conn, $query);
   
   while ($row = mysqli_fetch_assoc($res)){
        $eventi[] = $row;
   }
   mysqli_free_result($res);
   mysqli_close($conn);
   print_r(json_encode($eventi));
?>