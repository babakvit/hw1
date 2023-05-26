<?php 
    session_start();
    if (!isset($_SESSION['username'])){
        header("Location: homework_login.php");
        exit;
    }

    $conn = mysqli_connect("localhost", "root","", "homework1") or die(mysqli_connect_error());
    $username = mysqli_real_escape_string($conn, $_SESSION['username']);

    if (isset($_FILES['change_foto'])){
    if ($_FILES['change_foto']['size'] != 0) {
        $file = $_FILES['change_foto'];
        $type = exif_imagetype($file['tmp_name']);
        $allowedExt = array(IMAGETYPE_PNG => 'png', IMAGETYPE_JPEG => 'jpg', IMAGETYPE_GIF => 'gif');
        if (isset($allowedExt[$type])) {
            if ($file['error'] === 0) {
                if ($file['size'] < 7000000) {
                    $fileNameNew = uniqid('', true).".".$allowedExt[$type];
                    $fileDestination = 'images/'.$fileNameNew;
                    move_uploaded_file($file['tmp_name'], $fileDestination);
                    $query = "UPDATE users SET profile_picture = '$fileDestination' where username = '$username'";
                    $res = mysqli_query($conn, $query) or die("Errore query: ".mysqli_error($conn));
                } else {
                    $error = "L'immagine non deve avere dimensioni maggiori di 7MB";
                }
            } else {
                $error = "Errore nel carimento del file";
            }
        } else {
            $error = "I formati consentiti sono .png, .jpeg, .jpg e .gif";
        }
    } else $error = "Non hai selezionato nessun file";
} 

        
        
?>

<html>
    <head>
        <title>Profilo</title>
        <link rel="stylesheet" href="css/general.css">
        <link rel="stylesheet" href="css/profile.css">
        <script src="js/profile.js" defer></script>
        <script src="js/general.js" defer></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
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
        <article class="profile">
            <div id="account_container">
                <h2 class="info_utente" data-campo="nome_utente">prova</h2>
                <h2 class="info_utente" data-campo="nome">prova</h2>
                <h2 class="info_utente" data-campo="cognome">prova</h2>
                <h2 class="info_utente" data-campo="email">prova</h2>
            </div>
            <div id="foto_container">
                <img class="profile_picture" src="#" alt="">
                <div>Cambia la tua foto profilo: </div>
                <form name="change_foto" id="form_cambio_foto" method="post" enctype="multipart/form-data">
                <label for="change_foto"></label>
                <input type="file" name="change_foto" accept='.jpg, .jpeg, image/gif, image/png'> 
                <input type="submit" id="conferma_cambio_foto" value="Conferma">
                <?php if (isset($error)) echo "<div class=error>Errore: ".$error."</div>";?>
            </form>
            </div>
            
        </article>
    </body>
</html>