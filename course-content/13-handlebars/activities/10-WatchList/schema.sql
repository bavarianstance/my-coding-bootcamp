CREATE DATABASE movie_planner_db;
USE movie_planner_db;

CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT,
movie varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO movies (movie) VALUES ('Saving Private Ryan');
INSERT INTO movies (movie) VALUES ('Enemy at the Gates');
INSERT INTO movies (movie) VALUES ('Hacksaw Ridge');
INSERT INTO movies (movie) VALUES ('Pearl Harbor');
INSERT INTO movies (movie) VALUES ('Behind Enemy Lines');
