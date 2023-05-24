<?php 
    session_start();
    if (!isset($_SESSION['username'])){
        header("Location: homework_login.php");
        exit;
    }
    $conn = mysqli_connect("localhost", "root","", "homework1") or die(mysqli_connect_error());
    if (isset($_POST['change_foto'])){
        $link = mysqli_real_escape_string($conn, $_POST['change_foto']);
        $username = mysqli_real_escape_string($conn, $_SESSION['username']);
        $query = "UPDATE users SET profile_pic = '$link' where username = '$username'";
        $res = mysqli_query($conn, $query) or die("Errore query: ".mysqli_error($conn));
    }
?>

<html>
    <head>
        <title>Profilo</title>
        <link rel="stylesheet" href="css/general.css">
        <link rel="stylesheet" href="css/profile.css">
        <script src="js/profile.js" defer></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
    <nav>
            <div class="logo_nav">
                <h1>CinemaPortal</h1>
                <img src="images/popcorn.png" alt="" class="popcorn">
            </div>
            <a href="homework_home.php">Home</a>
            <a href="homework_watchlist.php">Watchlist</a>
            <a href="homework_soundtrack.php">Soundtrack</a>
            <a href="homework_logout.php">Logout</a>
        </nav>
        <article class="profile">
            <div id="account_container">
                <img class="profile_picture" src="#" alt="">
                <h2 class="info_utente" data-campo="nome_utente">prova</h2>
                <h2 class="info_utente" data-campo="nome">prova</h2>
                <h2 class="info_utente" data-campo="cognome">prova</h2>
                <h2 class="info_utente" data-campo="email">prova</h2>
            </div>
            <form name="change_foto" id="form_cambio_foto" method="post">
                <label for="change_foto"></label>
                <input type="file" name="change_foto"> 
                <input type="submit" id="conferma_cambio_foto" value="Conferma">
            </form>
        </article>
    </body>
</html>