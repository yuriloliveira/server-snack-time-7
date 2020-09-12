CREATE DATABASE IF NOT EXISTS snack_database;
USE snack_database;

CREATE TABLE IF NOT EXISTS products (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(255),
  price DECIMAL(10, 2),
  PRIMARY KEY (id)
);

INSERT INTO products VALUE(0, 'Fundo de Renda Fixa', 25);
INSERT INTO products VALUE(0, 'Fundo Multimercado', 86);