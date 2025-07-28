<?php
$conn = new mysqli("localhost", "root", "", "revenue_db");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
