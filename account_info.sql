CREATE DATABASE IF NOT EXISTS snack_database/
USE snack_database;

CREATE table if not exists `account_info` (
  `account_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `doc_number` int NOT NULL,
  PRIMARY KEY (`account_id`)
)