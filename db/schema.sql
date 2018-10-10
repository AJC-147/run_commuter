DROP DATABASE IF EXISTS pacemakerDB;

CREATE DATABASE pacemakerDB;
USE pacemakerDB;

CREATE TABLE runners (
  userID INT(100) AUTO_INCREMENT NOT NULL,
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
  distance DECIMAL(5,2) NOT NULL,
  totalTime TIME NOT NULL,
  averagePace TIME NOT NULL,
  agPercent DECIMAL(5,2) NOT NULL,
  dateTime DATETIME NOT NULL,
  location VARCHAR(100),
  temperature DECIMAL(5,2),
  windMPH DECIMAL(5,2),
  dewPoint DECIMAL(5,2),
  user_ID INT(100) NOT NULL DEFAULT 0,
  PRIMARY KEY (runID),
  FOREIGN KEY (user_ID) REFERENCES runners(userID)
);