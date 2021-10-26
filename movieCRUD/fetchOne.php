<?php

include("config.php");

error_reporting(E_ERROR);
$Movie = [];

$id = $_GET["id"];

$sql = "SELECT * FROM movies WHERE id=$id";

if($result = mysqli_query($conn, $sql)){

    $cr = 0;
    while($row = mysqli_fetch_assoc($result)){

        $Movie[$cr]['id'] = $row['id'];
        $Movie[$cr]['Title'] = $row['Title'];
        $Movie[$cr]['Description'] = $row['Description'];
        $Movie[$cr]['ImagePath'] = $row['ImagePath'];
        $Movie[$cr]['Cast'] = $row['Cast'];
        $Movie[$cr]['Favorite'] = $row['Favorite'];

        $cr++;
    }

    // print_r($Movie);

    echo json_encode($Movie);

} else{
    http_response_code(404);
}

?>