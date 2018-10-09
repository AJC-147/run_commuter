DROP DATABASE IF EXISTS pacemakerDB;

CREATE DATABASE pacemakerDB;
USE pacemakerDB;

CREATE TABLE runners (
  userID INT(100) AUTO_INCREMENT NOT NULL,
  runnerUsername VARCHAR(30) NOT NULL,
  runnerFirstname VARCHAR(60),
  runnerLastname VARCHAR(60),
  city VARCHAR(80) NOT NULL,
  gender BOOLEAN NOT NULL,
  dob DATE NOT NULL,
  email VARCHAR(80) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (userID)
);

CREATE TABLE runs (
  runID INT(100) AUTO_INCREMENT NOT NULL,
  distance INT(5) NOT NULL,
  totalTime TIME NOT NULL,
  averagePace TIME NOT NULL,
  agPercent INT(5) NOT NULL,
  dateTime DATETIME NOT NULL,
  location VARCHAR(100),
  temperature INT(5),
  windMPH INT(5),
  dewPoint INT(5),
  user_ID INT(100) NOT NULL,
  PRIMARY KEY (runID),
  FOREIGN KEY (user_ID) REFERENCES runners(userID)
);
