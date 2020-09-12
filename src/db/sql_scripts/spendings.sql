CREATE DATABASE IF NOT EXISTS snack_database/
USE snack_database;

CREATE TABLE `spendings` (
  `transaction_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int DEFAULT NULL,
  `transaction_type` varchar(45) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `date` int DEFAULT NULL,
  PRIMARY KEY (`transaction_id`)
)