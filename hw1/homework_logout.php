<?php 
    session_start();
    session_destroy();
    header("Location: homework_login.php");
    exit;
?>