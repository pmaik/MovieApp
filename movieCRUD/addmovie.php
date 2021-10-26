<?php

include("config.php");

$postdata = json_decode(file_get_contents('php://input'), true);

if(isset($postdata)){

    $Title = $postdata["Title"];
    $Description = $postdata["Description"];
    $ImagePath = $postdata["ImagePath"];
    $Cast = $postdata["Cast"];
    $Favorite = false;

    $sql = "INSERT INTO movies(Title, Description, ImagePath, Cast, Favorite)
    VALUES ('$Title', '$Description', '$ImagePath', '$Cast', '$Favorite')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

?>