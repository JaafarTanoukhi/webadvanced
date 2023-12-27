<?php

session_start();
include "connect.php";

    // Check if it's a POST request
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405); // Method Not Allowed
        echo json_encode(array("error" => "Only POST requests allowed"));
        return;
    }

    // Get the JSON data from the request body
    $json_data = file_get_contents('php://input');

    // Check if data was received
    if (!$json_data) {
        http_response_code(400); // Bad Request
        echo json_encode(array("error" => "No data received"));
        return;
    }

    // Decode JSON to associative array
    $decoded_data = json_decode($json_data, true);

    // Check if JSON decoding was successful
    if ($decoded_data === null) {
        http_response_code(400); // Bad Request
        echo json_encode(array("error" => "Invalid JSON data"));
        return;
    }

    // Check if username and password keys exist
    if (!isset($decoded_data['username_email']) || !isset($decoded_data['password'])) {
        http_response_code(400); // Bad Request
        echo json_encode(array("error" => "Username or password missing"));
        return;
    }

    // Access username and password from the decoded data
    $username_email = $decoded_data['username_email'];
    $password = $decoded_data['password'];


    $stmt = $conn->prepare("SELECT id FROM User WHERE (username = ? OR email = ?) AND password = ?");
$stmt->bind_param("sss", $username_email ,$username_email , $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Fetch the first row from the result set
    $row = $result->fetch_assoc();

    // Extract the 'id' from the row
    $user_id = $row['id'];

    http_response_code(200); // okay
    echo json_encode(array("id" => $user_id));
} else {
    http_response_code(404);
    echo json_encode(array("error" => "Username or password Incorrect"));
}

$stmt->close();



?>
