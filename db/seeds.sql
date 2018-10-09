USE pacemakerDB;

INSERT INTO runners (runnerUsername, runnerFirstname, runnerLastname, city, gender, dob, email, password)
VALUES ("username123", "Jane", "Doe", "Alexandria, Va", 1, 1991-01-01, "janedoe123@gmail.com", "passwordsecure");

INSERT INTO runs (distance, totalTime, averagePace, agPercent, datetime, location, temperature, windMPH, dewPoint)
VALUES (5, 00:60:43, 00:12:00, 50, 2018-07-01 12:00:01, "Washington, DC", 79, 3, 70)

SELECT * FROM runners;
SELECT * FROM runs;