-- Script name: inserts.sql
-- Author: Preetham Ramesh
-- Purpose: Insert sample data to test the integrity of this DB system

USE gatorGrubDB;

INSERT INTO RestaurantOwner (RestaurantOwnerID, RestaurantOwnerName, RestaurantOwnerEmail, RestaurantOwnerPhone, RestaurantOwnerPassword)
VALUES (1, "Bob Smith", "bobsmith@sfsu.com", "1231231234", "password8"),
		(2, "Billy Smith", "bobsmith@sfsu.com", "1231231234", "password8"),
        (3, "Billy Johnson", "bobsmith@sfsu.com", "1231231234", "password8"),
        (4, "Greg Elliot", "bobsmith@sfsu.com", "1231231234", "password8"),
        (5, "Sarah Sanders", "bobsmith@sfsu.com", "1231231234", "password8"),
        (6, "Joe Rogen", "bobsmith@sfsu.com", "1231231234", "password8"),
        (7, "Johnjacobjingleheimer Schmidt", "bobsmith@sfsu.com", "1231231234", "password8")
;

INSERT INTO Restaurant (RestaurantID, RestaurantOwner, RestaurantRegistered, RestaurantName, RestaurantPhone, RestaurantPassword, 
						RestaurantAddress, RestaurantCuisine, RestaurantPriceTier, RestaurantHours, RestaurantPrepTime) 
VALUES (1, "Bob Smith", "1", "Eating Place", "1234567890", "password1", "2735 39th Ave, San Francisco, CA 94116", "American", "3", "", "25"),
		(2, "Billy Smith", "1", "Eating Location", "1234567890", "password2", "2735 39th Ave, San Francisco, CA 94116", "American", "5", "", "25"),
        (3, "Billy Johnson", "1", "Feasting Area", "1234567890", "password3", "2735 39th Ave, San Francisco, CA 94116", "Italian", "1", "", "25"),
        (4, "Greg Elliot", "1", "Drinking locale", "1234567890", "password4", "2735 39th Ave, San Francisco, CA 94116", "Italian", "2", "", "25"),
        (5, "Sarah Sanders", "1", "Sipping Street", "1234567890", "password5", "2735 39th Ave, San Francisco, CA 94116", "Indian", "5", "", "25"),
        (6, "Joe Rogen", "1", "Gobbling Garden", "1234567890", "password6", "2735 39th Ave, San Francisco, CA 94116", "Indian", "4", "", "25"),
        (7, "Johnjacobjingleheimer Schmidt", "1", "Stuffing Square", "1234567890", "password7", "2735 39th Ave, San Francisco, CA 94116", "Indian", "2", "", "25")
;

