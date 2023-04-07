-- Script name: inserts.sql
-- Author: Preetham Ramesh
-- Purpose: Insert sample data to test the integrity of this DB system

USE gatorGrubDB;

INSERT INTO RestaurantOwner (RestaurantOwnerName, RestaurantOwnerEmail, RestaurantOwnerPhone, RestaurantOwnerPassword)
VALUES ("Bob Smith", "bobsmith@sfsu.com", "1231231234", "password8!"),
	("Billy Smith", "billysmith@sfsu.com", "1231231234", "password8!"),
	("Billy Johnson", "billyjohnson@sfsu.com", "1231231234", "password8!"),
	("Greg Elliot", "gregelliot@sfsu.com", "1231231234", "password8!"),
	("Sarah Sanders", "sarahsanders@sfsu.com", "1231231234", "password8!"),
	("Joe Rogen", "joerogen@sfsu.com", "1231231234", "password8!"),
	("Johnjacobjingleheimer Schmidt", "johnjacobjingleheimerschmidt@sfsu.com", "1231231234", "password8!")
;

INSERT INTO Driver (DriverName, DriverEmail, DriverPhone, DriverPassword)
VALUES ("Nathan Luu", "nathanluu@gmail.com", "1231231234", "password8!"),
	("Daniel Schutz", "danielschutz@gmail.com", "1231231234", "password8!"),
    ("Jerry Williams", "jerrywilliams@gmail.com", "1231231234", "password8!"),
    ("Rolf Kleinfeldt", "rolfkleinfeldt@gmail.com", "1231231234", "password8!"),
    ("Gabriella Tong", "gabbytong@gmail.com", "1231231234", "password8!"),
    ("Ana Warner", "anawarner@gmail.com", "1231231234", "password8!"),
    ("Hadas Curry", "hadascurry@gmail.com", "1231231234", "password8!"),
    ("Bea Joosten", "beajoosten@gmail.com", "1231231234", "password8!"),
    ("Anton Haight", "antonhaight@gmail.com", "1231231234", "password8!"),
    ("Tonio Stenger", "toniostenger@gmail.com", "1231231234", "password8!"),
    ("Catrina Oliver", "catrinaoliver@gmail.com", "1231231234", "password8!")
;

INSERT INTO Restaurant (RestaurantOwnerID, RestaurantRegistered, RestaurantName, RestaurantPhone, RestaurantPassword, 
						RestaurantAddress, RestaurantCuisine, RestaurantPriceTier, RestaurantHours, RestaurantPrepTime RestaurantImage RestaurantCoordinates) 
VALUES (1, 1, "Eating Place", "1234567890", "password1", "155 Winston Dr, San Francisco, CA 94132", "American", "3", "", "25", "./src/images/restaurant/12345", '37.7266,-122.4744'),
		(2, 1, "Eating Location", "1234567890", "password2", "155 Winston Dr, San Francisco, CA 94132", "American", "5", "", "25", "./src/images/restaurant/12345", '37.7266,-122.4744'),
        (3, 1, "Feasting Area", "1234567890", "password3", "155 Winston Dr, San Francisco, CA 94132", "Italian", "1", "", "25", "./src/images/restaurant/12345", '37.7266,-122.4744'),
        (4, 1, "Drinking locale", "1234567890", "password4", "155 Winston Dr, San Francisco, CA 94132", "Italian", "2", "", "25", "./src/images/restaurant/12345", '37.7266,-122.4744'),
        (5, 1, "Sipping Street", "1234567890", "password5", "155 Winston Dr, San Francisco, CA 94132", "Indian", "5", "", "25", "./src/images/restaurant/12345", '37.7266,-122.4744'),
        (6, 1, "Gobbling Garden", "1234567890", "password6", "155 Winston Dr, San Francisco, CA 94132", "Indian", "4", "", "25", "./src/images/restaurant/12345", '37.7266,-122.4744'),
        (7, 1, "Stuffing Square", "1234567890", "password7", "155 Winston Dr, San Francisco, CA 94132", "Indian", "2", "", "25", "./src/images/restaurant/12345", '37.7266,-122.4744')
;

