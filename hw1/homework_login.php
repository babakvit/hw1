<?php 
    session_start();
    if (isset($_SESSION["username"])){
        header("Location: homework_home.php");
        exit;
    }
    
    $conn = mysqli_connect("localhost", "root","", "homework1") or die(mysqli_connect_error());
  
    $errore = array();
    
    if (isset($_POST["username"]) && isset($_POST["password"])){
        $username  = mysqli_real_escape_string($conn, $_POST['username']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        $query = "SELECT * FROM users WHERE username = '".$username."' AND password = '".$password."'";
        $res = mysqli_query($conn, $query) or die("Errore query: ".mysqli_error($conn));
        if (mysqli_num_rows($res) > 0){
            $_SESSION['username'] = $_POST['username'];
            header("Location: homework_home.php");
            mysqli_free_result($res);
            mysqli_close($conn);
            exit;
        } else{
            $errore['log_pass'] = "Login o password incorretti, si prega di riprovare";
        }
        
    }else{
        $errore['campi'] = "Compilare tutti i campi per effettuare il login";
    }
    
?>

<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="css/login.css">
        <link rel="stylesheet" href="css/general.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Source+Serif+Pro:ital,wght@1,700&display=swap" rel="stylesheet">
        <script src="js/login.js" defer></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Homework</title>
    </head>
    <body>
        
        <div class="space-creator">
            <div id="logo">Welcome to CinemaPortal</div>
            <img src="images/popcorn.png" alt="">
        </div>
        <main><h4>Accedi al tuo account</h4>
        <form name="login_form" method="post" id="login_form">
                    <label for="username">Username</label>
                    <input type="text" name="username">
                    <label for="password">Password</label>
                    <input type="password" name="password">
                    <input type="submit">
            </form>
            <div id="registration">
                <div>Non hai un account? Registrati </div>
                <a href="homework_register.php">qui</a>
            </div>
        </main>
        <?php
            if (isset($errore['log_pass'])){
                echo "<div class='error'>".$errore['log_pass']."</div>";
            } 
        ?>
        
    </body>
</html>