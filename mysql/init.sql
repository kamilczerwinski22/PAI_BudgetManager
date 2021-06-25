CREATE USER docker;
CREATE DATABASE docker;
USE docker;
CREATE TABLE budget (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    cost float NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO budget (name, cost) VALUES ("Initial expense", 0);