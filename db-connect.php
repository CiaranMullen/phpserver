<?php

$dbName = "ciaran";
$dbUser = "root";
$dbPassword = "";

$db = new PDO("mysql:host=localhost;dbname=$dbName;charset=utf8mb4", $dbUser, $dbPassword );

$statement = $db->prepare("SELECT id, name, price, description FROM ciaran_products");
echo (after connect);
$statement->execute();

$products = $statement->fetchAll();

header ("Content-Type: application/json");
echo json_encode($products);