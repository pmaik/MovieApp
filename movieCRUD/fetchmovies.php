<?php

include("config.php");

error_reporting(E_ERROR);
$allMovies = [];

$sql = "SELECT * FROM movies ORDER BY Favorite DESC, Title ASC";

if($result = mysqli_query($conn, $sql)){

    $cr = 0;
    while($row = mysqli_fetch_assoc($result)){

        $allMovies[$cr]['id'] = $row['id'];
        $allMovies[$cr]['Title'] = $row['Title'];
        $allMovies[$cr]['Description'] = $row['Description'];
        $allMovies[$cr]['ImagePath'] = $row['ImagePath'];
        $allMovies[$cr]['Cast'] = $row['Cast'];
        $allMovies[$cr]['Favorite'] = $row['Favorite'];

        $cr++;
    }

    // print_r($allmovies);

    echo json_encode($allMovies);

} else{
    http_response_code(404);
}

?>