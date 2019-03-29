-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;
USE vruz5a8asr2phv3q;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
  devoured BOOL DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Deluxe Burger', FALSE);
