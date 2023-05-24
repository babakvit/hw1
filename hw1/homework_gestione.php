<?php 
    session_start();
    $conn = mysqli_connect("localhost", "root","", "homework1") or die(mysqli_connect_error());
    if (isset($_GET['choice'])){
        switch($_GET['choice']){
            case "1":
                if (isset($_GET['id_film'])){
                    $id_film = $_GET['id_film'];
                    $username = $_SESSION['username'];
                    $query = "INSERT INTO likes (id_film, username) VALUES ('$id_film', '$username')";
                    mysqli_query($conn, $query);
                }
                break;
            case "2":
                if (isset($_GET['id_film'])){
                    $id_film = $_GET['id_film'];
                    $username = $_SESSION['username'];
                    $query = "DELETE FROM likes WHERE id_film = '$id_film' and username = '$username'";
                    mysqli_query($conn, $query);
                }
                break;
            case "3":
                if (isset($_GET['id_film'])){
                    $id_film = $_GET['id_film'];
                    $username = $_SESSION['username'];
                    $text_of_comment = urldecode($_GET['text_mess']);
                    $query = "INSERT INTO commenti (id_film, username, testo_commento, date_comment) VALUES ('$id_film', '$username', '$text_of_comment', current_timestamp())";
                    mysqli_query($conn, $query);
                }
                
                break;
            case "4":
                if (isset($_GET['id_film'])){
                    $eventi = array();
                    $id_film = mysqli_real_escape_string($conn,$_GET['id_film']);
                    $query = "SELECT * FROM commenti WHERE id_film = '$id_film'";
                    $res = mysqli_query($conn, $query);
                    while ($row = mysqli_fetch_assoc($res)){
                        $eventi[] = $row;
                    }
                    mysqli_free_result($res);
                    echo json_encode($eventi);
                }
                break;
            case "5":
                $username = mysqli_real_escape_string($conn, $_SESSION['username']);
                $query = "SELECT username, name, surname, email, profile_picture FROM users WHERE username = '$username'";
                $res = mysqli_query($conn, $query);
                $row = mysqli_fetch_row($res);
                echo json_encode($row);
                break;
            default: break;
        }
    }

    mysqli_close($conn);
?>