CREATE DATABASE meubanco;

USE meubanco;

CREATE TABLE clientes (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    telefone VARCHAR(15),
    endereco VARCHAR(100),
    reg_date TIMESTAMP
);
<!--incluir!>
ALTER TABLE clientes ADD COLUMN senha VARCHAR(255) NOT NULL;