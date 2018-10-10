USE pacemakerDB;

INSERT INTO runners (runnerFirstname, runnerLastname, city, gender, dob, email, password)
VALUES ("Jane", "Doe", "Alexandria, Va", 1, "1991-01-01", "janedoe123@gmail.com", "passwordsecure");

INSERT INTO runs (distance, totalTime, averagePace, agPercent, datetime, location, temperature, windMPH, dewPoint,  user_ID)
VALUES (5, "01:00:43", "00:12:00", 50, "2018-07-01 12:00:01", "Washington, DC", 79, 3, 70, 1);

SELECT * FROM runners;
SELECT * FROM runs;