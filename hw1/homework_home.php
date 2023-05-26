<?php 
    session_start();
    if (!isset($_SESSION['username'])){
        header("Location: homework_login.php");
        exit;
    }
?>


<!DOCTYPE html>
<html>
    <head>
        <title>Homepage</title>
        <link rel="stylesheet" href="css/general.css">
        <link rel="stylesheet" href="css/homepage.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="js/homepage.js" defer></script>
        <script src="js/general.js" defer></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Source+Serif+Pro:ital,wght@1,700&display=swap" rel="stylesheet">
    </head>
    <body>
        <nav id="mobile">
            <div class="logo_nav">
                <h1>CinemaPortal</h1>
                <img src="images/popcorn.png" alt="" class="popcorn">
            </div>
            <div class="nav_menu_container">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
       <nav>
            <div class="logo_nav">
                <h1>CinemaPortal</h1>
                <img src="images/popcorn.png" alt="" class="popcorn">
            </div>
            <a href="homework_home.php">Home</a>
            <a href="homework_profile.php">Profilo</a>
            <a href="homework_watchlist.php">Watchlist</a>
            <a href="homework_soundtrack.php">Soundtrack</a>
            <a href="homework_logout.php">Logout</a>     
       </nav>
       <article>
            
       </article>
    </body>
</html>