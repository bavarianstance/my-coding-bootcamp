CREATE DATABASE seinfield_db;
USE seinfield_db;

CREATE TABLE characters
(
  id int
  AUTO_INCREMENT,
  name varchar
  (30) NOT NULL,
  coolness_pts int(11),
  attitude VARCHAR(30),
  PRIMARY KEY
  (id)
);

  INSERT INTO characters
    (name, coolness_pts, attitude)
  VALUES
    ("Jerry", 80, "opinionated");
  INSERT INTO characters
    (name, coolness_pts, attitude)
  VALUES
    ("Leanne", 70, "lofty");
  INSERT INTO characters
    (name, coolness_pts, attitude)
  VALUES
    ("Kramer", 60, "discriminatory");
  INSERT INTO characters
    (name, coolness_pts, attitude)
  VALUES
    ("Bob", 50, "bald");
