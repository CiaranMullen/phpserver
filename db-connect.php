<?php

$dbName = "ciaran";
$dbUser = "root";
$dbPassword = "root";

$db = new PDO("mysql:host=localhost;dbname=$dbName;charset=utf8mb4", $dbUser, $dbPassword );

$statement = $db->prepare("SELECT id, name, price, description FROM products");

$statement->execute();

$products = $statement->fetchAll();

header ("Content-Type: application/json");
echo json_encode($products);