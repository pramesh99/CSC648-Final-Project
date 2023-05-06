-- Script name: inserts.sql
-- Author: Preetham Ramesh & Shauhin Pourshayegan
-- Purpose: Insert sample data to test the integrity of this DB system

USE gatorGrubDB;


/*
#This code block is only to be used for a full reset in order to reset the auto-increment for our demo DB environment.
#Reset Owners:
DELETE FROM RestaurantOwner Where RestaurantOwnerID>-1;
ALTER TABLE RestaurantOwner AUTO_INCREMENT = 1;
#Reset Drivers:

#Reset Cuisine:
DELETE FROM Cuisine Where CuisineID>-1;
ALTER TABLE Cuisine AUTO_INCREMENT = 1;

#Reset SFSUCustomers:
DELETE FROM SFSUCustomer Where SFSUCustomerID>-1;
ALTER TABLE SFSUCustomer AUTO_INCREMENT = 1;

#Reset Restaurant:
DELETE FROM Restaurant Where RestaurantID>-1;
ALTER TABLE Restaurant AUTO_INCREMENT = 1;
*/

INSERT INTO RestaurantOwner (RestaurantOwnerID, RestaurantOwnerName, RestaurantOwnerEmail, RestaurantOwnerPhone, RestaurantOwnerPassword)
VALUES (1, "Bob Smith", "bobsmith@sfsu.com", "1231231234", "password8!"),
	(2, "Billy Smith", "billysmith@sfsu.com", "1231231234", "password8!"),
	(3, "Billy Johnson", "billyjohnson@sfsu.com", "1231231234", "password8!"),
	(4, "Greg Elliot", "gregelliot@sfsu.com", "1231231234", "password8!"),
	(5, "Sarah Sanders", "sarahsanders@sfsu.com", "1231231234", "password8!"),
	(6, "Joe Rogen", "joerogen@sfsu.com", "1231231234", "password8!"),
	(7, "Johnjacobjingleheimer Schmidt", "johnjacobjingleheimerschmidt@sfsu.com", "1231231234", "password8!"),
    (8, "Joanna Zhang", "joannazhang@sfsu.com", "1231231234", "password8!")
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

INSERT INTO SFSUCustomer (SFSUCustomerID, SFSUCustomerName, SFSUCustomerEmail, SFSUCustomerPhone, SFSUCustomerPassword)
VALUES (1, "Balthazar McSquishy", "mcsquishb@sfsu.edu", "1231231234", "password8!"),
       (2, "Gertrude Puddlesworth", "puddle.gert@sfsu.edu", "1231231234", "password8!"),
       (3, "Barnaby McFluffernutter", "nutfluff@sfsu.edu", "1231231234", "password8!"),
       (4, "Hortense Snickerdoodle", "hors@sfsu.edu", "1231231234", "password8!"),
       (5, "Chuckleberry Finnegan", "chuck.finn@sfsu.edu", "1231231234", "password8!")
;

INSERT INTO Cuisine (CuisineID, CuisineName)
VALUES (1, 'American'),
		(2,'Italian'),
		(3,'Indian'),
		(4, 'Chinese')
;
*/
INSERT INTO Restaurant (RestaurantOwnerID, flag, RestaurantName, RestaurantPhone, RestaurantPassword, 
						RestaurantAddress, RestaurantCuisine, RestaurantPriceTier, RestaurantHours, RestaurantPrepTime, RestaurantImage, RestaurantCoordinates, RestaurantDescription) 
VALUES (1, 1, "Eating Place", "1234567890", "password1", "155 Winston Dr, San Francisco, CA 94132", 1, 3, "", 25, "./src/images/restaurant/12345", '37.7266,-122.4744', 'A place where people congregate for American lunch.'),
		(2, 2, "Eating Location", "1234567890", "password2", "155 Winston Dr, San Francisco, CA 94132", 1, 5, "", 25, "./src/images/restaurant/12345", '37.7266,-122.4744', 'Homely environment for modern American digs.'),
        (3, 3, "Feasting Area", "1234567890", "password3", "155 Winston Dr, San Francisco, CA 94132", 2, 1, "", 25, "./src/images/restaurant/12345", '37.7266,-122.4744', 'Quick and cheap Italian food your Nona would never make.'),
        (4, 4, "Bevande Venue", "1234567890", "password4", "155 Winston Dr, San Francisco, CA 94132", 2, 2, "", 25, "./src/images/restaurant/12345", '37.7266,-122.4744', 'Classic bar and grill in a lively commercial alleyway with an amazing Italian cocktail selection.'),
        (5, 5, "Sipping Street", "1234567890", "password5", "155 Winston Dr, San Francisco, CA 94132", 2, 5, "", 25, "./src/images/restaurant/12345", '37.7266,-122.4744', 'Italian fare in a bar setting makes guests return.'),
        (6, 6, "Gobbling Garden", "1234567890", "password6", "155 Winston Dr, San Francisco, CA 94132", 3, 4, "", 25, "./src/images/restaurant/12345", '37.7266,-122.4744', 'Vegan Indian food in an forclosed rainforest cafe.'),
        (7, 7, "Stuffing Square", "1234567890", "password7", "155 Winston Dr, San Francisco, CA 94132", 3, 2, "", 25, "./src/images/restaurant/12345", '37.7266,-122.4744', 'This Indian spot in an outdoor plaza serves panipuri and joy.'),
        (8, 8, "Dimsum Dimension", "1234567890", "password1", "155 Winston Dr, San Francisco, CA 94132", 4, 3, "", 25, "./src/images/restaurant/12345", '37.726233, -122.463763', 'Classic spot for traditional yum cha on a cozy thoroughfare.')
;

INSERT INTO MenuItem (RestaurantID, MenuItemName, MenuItemPicture, MenuItemPrice, MenuItemType, MenuItemDescription)
VALUES (1, "Classic Cheeseburger", "./src/images/restaurant/12345", 7.20, "Entree", "Two of our famous all-beef patties gilled atop a potato bun and fully loaded with toppings."),
	    (1, "NY Ruben", "./src/images/restaurant/12345", 8.10, "Entree", "Bubbe's famous New York Ruben is packed full of our housemade corned beef and is wraped by marbled rye."),
        (1, "Bacon Cheeseburger", "./src/images/restaurant/12345", 7.70, "Entree", "One quarter pound all-beef patty, grilled and topped with hickory smoked bacon on a potato bun."),
        (1, "Benedict Burger", "./src/images/restaurant/12345", 6.20, "Entree", "One all-beef patty grilled and topped with a poached egg and holondaise sauce between a sliced English muffin."),
        (1, "The Ultimate BLT", "./src/images/restaurant/12345", 14.30, "Entree", "Twelve slices of hickory smoked bacon on a loaf of brioche. Heirloom tomatoes, romaine lettuce, housemade garlic aioli."),
        (1, "Shoestring Fries", "./src/images/restaurant/12345", 3.10, "Side", "California grown potatoes, julliened and fried in our secret grease."),
        (1, "Curly Fries", "./src/images/restaurant/12345", 3.15, "Side", "California grown potatoes, spiralized, battered and fried in our secret grease."),
	    (1, "Vanilla Milkshake", "./src/images/restaurant/12345", 6.53, "Drink", "Fresh cream base from our local dairy farms, infused with Madagascar vanilla."),
        (1, "Fountain Drink", "./src/images/restaurant/12345", 2.20, "Drink", "A randomly chosen drink from our fountain machine featuring a wide variety of generic sodas."),
	    (2, "Salisbury Steak", "./src/images/restaurant/12345", 12.20, "Entree", "Three quarters of a pound salisbury steak served with onion gravy and mashed potatoes."),
    	(2, "Half Rotisserie Chicken", "./src/images/restaurant/12345", 9.10, "Entree", "Butchered and brined in-house. Juicy, tender and fall-off-the-bone."),
        (2, "Chicken Pot Pie", "./src/images/restaurant/12345", 8.70, "Entree", "Made with our famous rotisserie chicken and packed full of homey veggies and silky roux."),
        (2, "Day-old Chicken Pot Pie", "./src/images/restaurant/12345", 6.20, "Entree", "The same as our regular chicken pot pie, but with cost savings."),
        (2, "Potato Bowl", "./src/images/restaurant/12345", 14.30, "Entree", "One russet potato baked and loaded with 16 oz. of sliced ribeye. Served with classic baked potato toppings."),
        (2, "Mac and Cheese", "./src/images/restaurant/12345", 3.10, "Side", "Classic elbows draped in silky bechamel saturated with cheddar and american cheese."),
        (2, "Apple Pie", "./src/images/restaurant/12345", 3.15, "Dessert", "That classic pie momma used to bake. Made daily with granny smith and braeburn apples."),
    	(2, "Southern Sweet Tea", "./src/images/restaurant/12345", 3.53, "Drink", "Classic southern-style sweet tea with over 400 grams of sugar per serving."),
        (2, "Fountain Drink", "./src/images/restaurant/12345", 2.20, "Drink", "A randomly chosen drink from our fountain machine featuring a wide variety of generic sodas."),
        (3, "Garlic Bread", "./src/images/restaurant/12345", 12.20, "Appitizer", "Housemade Italian rolls, halved and smeared in garlic-herb butter, toasted to perfection."),
	    (3, "Veal Cutlet Milanese", "./src/images/restaurant/12345", 13.10, "Entree", "Breaded, deep fried veal cutlet with a side of our mushroom risotto"),
        (3, "Cacio e Pepe", "./src/images/restaurant/12345", 8.70, "Entree", "DOP cheese and freshly ground pepper topped linguini in a silky cream sauce."),
        (3, "Osso Bucco", "./src/images/restaurant/12345", 15.20, "Entree", "Made with ox tail instead of veal transforms this dish to rustic and richly comforting."),
        (3, "Sicillian Cheese Pizza", "./src/images/restaurant/12345", 14.30, "Entree", "Housemade sauce and dough make this dish stand out from other delivery places."),
        (3, "Mushroom Risotto", "./src/images/restaurant/12345", 3.10, "Side", "Classic elbows draped in silky bechamel saturated with cheddar and american cheese."),
        (3, "Canoli", "./src/images/restaurant/12345", 3.15, "Dessert", "Three extra large canoli from our sister bakery. Enough for a party of three."),
    	(3, "Limoncello", "./src/images/restaurant/12345", 3.53, "Drink", "Wet your whistle with this classic Italian lemon sugar liquor."),
        (3, "Fountain Drink", "./src/images/restaurant/12345", 2.20, "Drink", "A randomly chosen drink from our fountain machine featuring a wide variety of generic sodas."),
        (4, "Fried Calamari", "./src/images/restaurant/12345", 12.20, "Appitizer", "Breaded and fried calamari, served with a side of cocktail sauce, tartar sauce."),
	    (4, "Spaghetti alla Carbonara", "./src/images/restaurant/12345", 13.10, "Entree", "An Italian Classic served with a sping salad."),
        (4, "Pine and Sage Gnocci", "./src/images/restaurant/12345", 8.70, "Entree", "Pan fried gnocci in an olive oil based sauce with pine nuts and fresh sage."),
        (4, "Lasagne", "./src/images/restaurant/12345", 15.20, "Entree", "Nona's recipe. Don't ask!"),
        (4, "Ribollita", "./src/images/restaurant/12345", 9.30, "Entree", "Housemade traditional Tuscan soup. Comforting on cold days."),
        (4, "Polenta", "./src/images/restaurant/12345", 5.10, "Side", "Served in slices and topped with aromatic cheese and a generous blanket of butter."),
        (4, "Gelato", "./src/images/restaurant/12345", 6.15, "Dessert", "Once scoop each of strawberry, Nutella and blood orange imported Italian gelato."),
	    (4, "Limoncello", "./src/images/restaurant/12345", 3.53, "Drink", "Wet your whistle with this classic Italian lemon sugar liquor."),
        (4, "Fountain Drink", "./src/images/restaurant/12345", 2.20, "Drink", "A randomly chosen drink from our fountain machine featuring a wide variety of generic sodas."),
        (5, "Mozzarella Sticks", "./src/images/restaurant/12345", 7.20, "Appitizer", "Breaded and fried mozzarella, served with a side of marinara sauce."),
    	(5, "Loaded Focaccia", "./src/images/restaurant/12345", 13.10, "Entree", "Our special focaccia loaded with twelve types of meat and cheese."),
        (5, "Partysize Pizza", "./src/images/restaurant/12345", 122.70, "Entree", "Cheese only. Serves a party of thirty."),
        (5, "Spaghetti and Meatballs", "./src/images/restaurant/12345", 4.50, "Entree", "Cheapest possible ingredients for a great value. Meat varies!"),
        (5, "Peperoni Calzone", "./src/images/restaurant/12345", 9.30, "Entree", "Peperoni, mozarella and marinara, baked perfectly to burn your mouth on the first bite."),
        (5, "Garlic Fries", "./src/images/restaurant/12345", 5.10, "Side", "Topped with melted garlic butter, salt and oregano."),
        (5, "Italian Wedding Cake", "./src/images/restaurant/12345", 6.15, "Dessert", "Two slices. Save it for later."),
    	(5, "San Pelogrino", "./src/images/restaurant/12345", 3.53, "Drink", "Only lemon flavor though."),
        (5, "Fountain Drink", "./src/images/restaurant/12345", 2.20, "Drink", "A randomly chosen drink from our fountain machine featuring a wide variety of generic sodas."),
    	(6, "Vegetable Samosas", "./src/images/restaurant/12345", 7.20, "Appitizer", "Crispy potato samosas. Sauces of on the side."),
	    (6, "Palak Paneer", "./src/images/restaurant/12345", 13.10, "Entree", "Farmer's cheese stewed with vegetables like spinach and aromatics."),
        (6, "Chana Masala", "./src/images/restaurant/12345", 10.70, "Entree", "Delicious chickpeas in a velvety tomato-based curry."),
        (6, "Aloo Gobi", "./src/images/restaurant/12345", 7.50, "Entree", "Cauliflower and potatoes join forces to make this dish unforgetable."),
        (6, "Auntie's Daal", "./src/images/restaurant/12345", 9.30, "Entree", "Our Auntie's famous lentils. This dish is simple, yet stand-out."),
        (6, "Garlic Naan", "./src/images/restaurant/12345", 6.10, "Side", "Topped with melted garlic ghee and filled with chopped garlic and parsley."),
        (6, "Gulab Jamun", "./src/images/restaurant/12345", 6.15, "Dessert", "Deep fried doughnuts, saturated with our special aromatic syrup."),
	    (6, "Mango Lassi", "./src/images/restaurant/12345", 3.53, "Drink", "A traditional mango & yogurt smoothie."),
        (6, "Fountain Drink", "./src/images/restaurant/12345", 2.20, "Drink", "A randomly chosen drink from our fountain machine featuring a wide variety of generic sodas."),
        (7, "Panipuri", "./src/images/restaurant/12345", 7.20, "Appitizer", "Crisps with chickpeas, veggies and sauces of on the side."),
	    (7, "Vegetable Vindaloo", "./src/images/restaurant/12345", 13.10, "Entree", "Vegetable curry served with rice."),
        (7, "Chicken Tikka Masala", "./src/images/restaurant/12345", 10.70, "Entree", "Fan favorite from across the pond."),
        (7, "Lamb Kabab Masala", "./src/images/restaurant/12345", 12.50, "Entree", "Tandoori lamb skewers are the hilight of this curry."),
        (7, "Daal Makhani", "./src/images/restaurant/12345", 9.30, "Entree", "Our famous lentils in an alluring tomato-butter sauce."),
        (7, "Basmati Rice", "./src/images/restaurant/12345", 4.10, "Side", "Lightly seasoned with salt and delecately aromatic."),
        (7, "Jalebi", "./src/images/restaurant/12345", 6.15, "Dessert", "Crispy fried funnel cake, saturated with our special aromatic syrup."),
	    (7, "Yoo-hoo", "./src/images/restaurant/12345", 3.53, "Drink", "Chocolate flavoured beverage."),
        (7, "Fountain Drink", "./src/images/restaurant/12345", 2.20, "Drink", "A randomly chosen drink from our fountain machine featuring a wide variety of generic sodas."),
        (8, "Breakfast Congee", "./src/images/restaurant/12345", 7.20, "Appitizer", "Traditional Chinese rice porridge."),
	    (8, "Pork Siu Mai", "./src/images/restaurant/12345", 9.10, "Entree", "Pork-filled dumpling with a light wrapper."),
        (8, "Char Siu Bao", "./src/images/restaurant/12345", 10.70, "Entree", "Sweet barbecue pork wrapped in a fluffy bun."),
        (8, "Xiao Long Bao", "./src/images/restaurant/12345", 12.50, "Entree", "Rich, piping-hot soup dumplings."),
        (8, "Shrimp Dumpling", "./src/images/restaurant/12345", 6.30, "Entree", "This family favorite is rich and savory."),
        (8, "Cheung Fun", "./src/images/restaurant/12345", 10.10, "Side", "These ricepaper crapes  contain beef, pork and shrimp."),
        (8, "Custard Tarts", "./src/images/restaurant/12345", 6.15, "Dessert", "Crispy pastry shell with luxurious custard."),
	    (8, "House Tea", "./src/images/restaurant/12345", 3.53, "Drink", "Unlimuted jasmine tea. Servers will refill you on sight!"),
        (8, "Fountain Drink", "./src/images/restaurant/12345", 2.20, "Drink", "A randomly chosen drink from our fountain machine featuring a wide variety of generic sodas.")
;