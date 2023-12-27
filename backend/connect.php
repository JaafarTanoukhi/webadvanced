<?php
$servername = "sql11.freemysqlhosting.net";
$username = "sql11672611";
$password = "2SQwxpSqLW";
$dbname = "sql11672611";
$port = 3306;

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname, $port);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


?>