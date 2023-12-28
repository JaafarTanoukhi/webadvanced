<?php

function AllowCors(){
    header("Access-Control-Allow-Origin: http://localhost:5173"); // Replace with the actual URL of your React app
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('HTTP/1.1 200 OK');
    exit();
}
}

function RecieveData():?string{
     // Check if it's a POST request
     if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405); // Method Not Allowed
        echo json_encode(array("error" => "Only POST requests allowed"));
        return null;
    }

    // Get the JSON data from the request body
    $json_data = file_get_contents('php://input');

    // Check if data was received
    if (!$json_data) {
        http_response_code(400); // Bad Request
        echo json_encode(array("error" => "No data received"));
        return null;
    }

    return $json_data;
}

?>