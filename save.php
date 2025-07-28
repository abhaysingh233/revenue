<?php
include 'db_config.php';

$product = $_POST['product'];
$price = $_POST['price'];
$quantity = $_POST['quantity'];
$revenue = $price * $quantity;

$sql = "INSERT INTO revenue (product, price, quantity, revenue) VALUES ('$product', '$price', '$quantity', '$revenue')";
$conn->query($sql);

echo "Success";
?>
