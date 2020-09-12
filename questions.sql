CREATE DATABASE IF NOT EXISTS snack_database/
USE snack_database;

CREATE TABLE if not exists `questions` (
  `question` varchar(45) NOT NULL,
  `answer` varchar(45) DEFAULT NULL
) 