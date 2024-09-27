<?php
$servername = "localhost";
$username = "root"; // ou o nome do usuário que você criou
$password = ""; // sua senha do MySQL
$dbname = "ecommerce";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
echo "Conexão realizada com sucesso";
?>
