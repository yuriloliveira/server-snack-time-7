CREATE DATABASE IF NOT EXISTS snack_database;
USE snack_database;

CREATE TABLE if not exists questions (
  question_id int NOT NULL AUTO_INCREMENT,
  title varchar(200) NOT NULL,
  PRIMARY KEY (question_id)
);

CREATE TABLE if not exists question_alternatives (
  alternative_id int NOT NULL AUTO_INCREMENT,
  question_id int NOT NULL,
  title varchar(200) NOT NULL,
  correct_answer boolean NOT NULL DEFAULT FALSE,
  PRIMARY KEY (alternative_id),
  FOREIGN KEY (question_id) REFERENCES questions (question_id)
);