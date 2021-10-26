<?php

if (isset($_SERVER['HTTP_ORIGIN'])) { 
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
      header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 
  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
      header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
}


$servername = "localhost";
$username = "root";
$password = '';
$dbname = "moviedb";

$conn = new mysqli($servername, $username, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
// echo "Connected successfully";

?>
