<?php 
    session_start();
    if (!isset($_SESSION['username'])){
        header("Location: homework_login.php");
        exit;
    }
?>

<html>
    <head>
        <title>Soundtrack</title>
        <link rel="stylesheet" href="css/general.css">
        <link rel="stylesheet" href="css/soundtrack.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="js/soundtrack.js" defer></script>
        <script src="js/general.js" defer></script>
        <link rel="stylesheet" href="soundtrack.css">
    </head>
    <body>
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
        <form id="soundtrack_search" name="request_spotify_form">
            <label>Cerca soundtrack dei film
                <input type="text" name="cerca_sound">
                <input type="submit" value="Cerca">
            </label>
        </form>
        <div class="container_sounds"></div>
    </body>
</html>