<?php 

session_start();
include "connect.php";

$info = [
    "user" => "ali",
    "pass" => "123"
];

$encoded_data = json_encode($info);

file_put_contents('data.json', $encoded_data);





?>