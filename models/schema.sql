CREATE DATABASE CalCount;
USE CalCount;

CREATE TABLE counts
(
	id int NOT NULL AUTO_INCREMENT,
	age varchar(255) NOT NULL,
    gender varchar(255) NOT NULL,
    calories varchar(255) NOT NULL,
    height varchar(255) NOT NULL,
    weight varchar(255) NOT NULL,
	PRIMARY KEY (id)
);