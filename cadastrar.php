<?php
$servername = "localhost";
$username = "root";  // Usuário padrão do MySQL
$password = "";      // Senha padrão do MySQL
$dbname = "meubanco";  // Nome do banco de dados

// Criar conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obter os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$endereco = $_POST['endereco'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT); // Criptografar a senha

// Inserir dados na tabela de clientes
$sql = "INSERT INTO clientes (nome, email, telefone, endereco, senha)
VALUES ('$nome', '$email', '$telefone', '$endereco', '$senha')";

if ($conn->query($sql) === TRUE) {
    echo "Novo cliente cadastrado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

// Fechar conexão
$conn->close();
?>
