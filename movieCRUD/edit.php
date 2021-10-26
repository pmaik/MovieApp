<?php
    include("config.php");

$postdata = json_decode(file_get_contents('php://input'), true);

// print_r($postdata);

if(isset($postdata)){

    $id = $postdata["id"];
    $Title = $postdata["Title"];
    $Description = $postdata["Description"];
    $ImagePath = $postdata["ImagePath"];
    $Cast = $postdata["Cast"];

    $sql = "UPDATE `movies` SET 
       `Title` = '$Title', 
       `Description` = '$Description', 
       `ImagePath` = '$ImagePath', 
       `Cast` = '$Cast' 
        where id = $id";

    if ($conn->query($sql) === FALSE) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    } 
}

?>