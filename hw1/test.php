<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $file = $_FILES['fileToUpload'];
  $fileName = $file['name'];
  $fileTmpName = $file['tmp_name'];
  $fileError = $file['error'];

  if ($fileError === UPLOAD_ERR_OK) {
    $targetPath = 'images/' . $fileName;
    move_uploaded_file($fileTmpName, $targetPath);
    echo "Il file $fileName è stato caricato con successo!";
    echo $targetPath;
  } else {
    echo "Si è verificato un errore durante il caricamento del file.";
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Caricamento file</title>
</head>
<body>
  <form method="POST" enctype="multipart/form-data">
    <input type="file" name="fileToUpload" />
    <input type="submit" value="Carica" />
  </form>
</body>
</html>
