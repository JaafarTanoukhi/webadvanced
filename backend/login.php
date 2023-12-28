<?php
include "connect.php";
include "utility.php";
AllowCors();

session_start();

$json_data=RecieveData();

    // Decode JSON to associative array
    $decoded_data = json_decode($json_data, true);

    // Check if JSON decoding was successful
    if ($decoded_data === null) {
        http_response_code(400); // Bad Request
        echo json_encode(array("error" => "Invalid JSON data"));
        exit;
    }

    // Check if username and password keys exist
    if (!isset($decoded_data['username_email']) || !isset($decoded_data['password'])) {
        http_response_code(400); // Bad Request
        echo json_encode(array("error" => "Username or password missing"));
        exit;
    }

    // Access username and password from the decoded data
    $username_email = $decoded_data['username_email'];
    $password = $decoded_data['password'];


    $stmt = $conn->prepare("SELECT * FROM User WHERE (username = ? OR email = ?) AND password = ?");
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
