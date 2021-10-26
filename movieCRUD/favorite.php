<?php

include("config.php");

$postdata = json_decode(file_get_contents('php://input'), true);

if(isset($postdata)){

    $id = $postdata["id"];
    if($postdata["Favorite"] == "1"){
        $fav = 0;
    } else{
        $fav = 1;
    }

    $sql = "UPDATE `movies` SET 
       `Favorite` = '$fav'
        where id = $id";


    if($conn->query($sql) === FALSE){
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
}


?>