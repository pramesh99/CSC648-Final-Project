/*
Author: Preetham Ramesh
Purpose: Store all database queries
*/

const mysql = require('mysql');
const Fuse = require('fuse.js');

//pool maintains list of connections
const pool = mysql.createPool({
    connectionLimit: 50,
    password: 'team-03',
    user: 'root',
    database: 'gatorGrubDB',
    host: '34.30.64.72'
});

let DB = {};

DB.getAllOwners = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM RestaurantOwner', (err, results) => {
            if (err) {
                return reject(err);
            }

            return resolve(results);
        });
    });
};

DB.getAllRestaurants = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM Restaurant WHERE flag = 1', (err, results) => {
            if (err) {
                return reject(err);
            }

            return resolve(results);
        });
    });
}

DB.getRestaurantByName = (name) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM Restaurant WHERE RestaurantName = ? AND flag = 1',
            [name],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
    });
}

DB.getRestByCuisine = (cuisine) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM Restaurant WHERE RestaurantCuisine = ? AND flag = 1',
            [cuisine], //prevent SQL injection
            (err, results) => {
                if (err) {
                    return reject(err);
                }

                return resolve(results);
            });
    });
}

DB.getAllCuisines = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT CuisineName from Cuisine ORDER BY CuisineName ASC',
            (err, results) => {
                if (err) {
                    return reject(err);
                }

                return resolve(results);
            });
    });
}

DB.searchBarQueryNoCuisine = (search_input) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Restaurant WHERE flag = 1`,
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                const fuse_dict = results;
                const fuse = new Fuse(fuse_dict, {threshold: 0.4, keys: ['RestaurantName', 'cuisine_name', 'RestaurantDescription']});
                return resolve(fuse.search(search_input));
            });
    });
}

DB.searchBarQueryWithCuisine = (cuisine, search_input) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT Restaurant.RestaurantID, Restaurant.RestaurantOwnerID, Restaurant.flag, Restaurant.RestaurantName, 
                           Restaurant.RestaurantPhone, Restaurant.RestaurantPassword, Restaurant.RestaurantAddress, Cuisine.cuisineName,
                           Restaurant.RestaurantPriceTier, Restaurant.RestaurantHours, Restaurant.RestaurantPrepTime, Restaurant.RestaurantCoordinates, 
                           Restaurant.RestaurantDescription
                    FROM Restaurant
                    INNER JOIN Cuisine ON Restaurant.RestaurantCuisine=Cuisine.cuisineID
                    WHERE Cuisine.cuisineName = ? AND Restaurant.flag = 1`,
            [cuisine],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                const fuse_dict = results;
                const fuse = new Fuse(fuse_dict, {threshold: 0.4, keys: ['RestaurantName', 'RestaurantDescription']});
                return resolve(fuse.search(search_input));
            });
    });
}

DB.SFSUCustomerReg = (name, email, phone, password) => {
    return new Promise ((resolve, reject) => {
        pool.query('INSERT INTO SFSUCustomer (SFSUCustomerName, SFSUCustomerEmail, SFSUCustomerPhone, SFSUCustomerPassword) VALUES (?, ?, ?, ?)',
            [name, email, phone, password],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
    });
}

DB.DriverReg = (name, email, phone, password) => {
    return new Promise ((resolve, reject) => {
        pool.query('INSERT INTO Driver (DriverName, DriverEmail, DriverPhone, DriverPassword) VALUES (?, ?, ?, ?)',
            [name, email, phone, password],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
    });
}

DB.RestaurantOwnerReg = (name, email, phone, password) => {
    return new Promise ((resolve, reject) => {
        pool.query('INSERT INTO RestaurantOwner (RestaurantOwnerName, RestaurantOwnerEmail, RestaurantOwnerPhone, RestaurantOwnerPassword) VALUES (?, ?, ?, ?)',
            [name, email, phone, password],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
    });
}

DB.RestaurantReg = () => {
    return new Promise ((resolve, reject) => {
        pool.query(`INSERT INTO Restaurant ()`)
    })
}

DB.getSFSUCustomer = (email) => {
    return new Promise ((resolve, reject) => {
        pool.query('SELECT * FROM SFSUCustomer WHERE SFSUCustomerEmail = ?',
        [email],
        (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

DB.getDriver = (email) => {
    return new Promise ((resolve, reject) => {
        pool.query('SELECT * FROM Driver WHERE DriverEmail = ?',
        [email],
        (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

DB.getRestaurantOwner = (email) => {
    return new Promise ((resolve, reject) => {
        pool.query('SELECT * FROM RestaurantOwner WHERE RestaurantOwnerEmail = ?',
        [email],
        (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}


DB.getRestaurantMenu = (restaurant) => {
    return new Promise ((resolve, reject) => {
        pool.query('SELECT MenuItem.* FROM MenuItem JOIN Restaurant ON MenuItem.RestaurantID = Restaurant.RestaurantID WHERE Restaurant.RestaurantName = ?', [restaurant],
        (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

DB.enterOrder = (cID, dID, rID, oTime, dTime, dAddress, aNotes, oDisc, oPrice, oStatus) => {
    return new Promise ((resolve, reject) => {
        pool.query(`INSERT INTO Orders (CustomerID,
                        DriverID, RestaurantID, OrderTime, DeliveryTime,
                        DeliveryAddress, AdditionalNotes, OrderDiscounts, 
                        OrderPrice, OrderStatus) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [cID, dID, rID, oTime, dTime, dAddress, aNotes, oDisc, oPrice, oStatus],
                    (err, results) => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve(results);
                    });
    });
}

DB.enterOrderItems = (oID, miID, qty, price) => {
    return new Promise ((resolve, reject) => {
        pool.query(`INSERT INTO OrderItems (OrderItemsID, OrderID, MenuItemID, Quanity, Price) VALUES (?, ?, ?, ?)`, 
        [oID, miID, qty, price],
        (err, results) => {
            if (err) {
                return reject(err);
            } 
            return resolve(results);
        });
    })
}


DB.getOrderByStatusNum = (statusNum) => {
    return new Promise ((resolve, reject) => {
        pool.query(`SELECT * FROM Orders WHERE OrderStatus = ?`,
        [statusNum],
        (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

DB.getOrderByDriverID = (driverID) => {
    return new Promise ((resolve, reject) => {
        pool.query(`SELECT * FROM Orders WHERE DriverID = ?`,
        [driverID],
        (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

DB.getOrderByRestID = (restID) => {
    return new Promise ((resolve, reject) => {
        pool.query(`SELECT * FROM Orders WHERE RestaurantID = ?`,
        [restID],
        (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

DB.getOrderByDriverID = (driverID) => {
    return new Promise ((resolve, reject) => {
        pool.query(`SELECT * FROM Orders WHERE DriverID = ?`,
        [driverID],
        (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}
DB.updateOrderStatus = (orderID, statusID) => {
    return new Promise ((resolve, reject) => {
        pool.query(`UPDATE Orders SET OrderStatus = ? WHERE OrderID = ?`,
        [statusID, orderID],
        (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

DB.updateDriverID = (orderID, driverID) => {
    return new Promise ((resolve, reject) => {
        pool.query(`UPDATE Orders SET DriverID = ? WHERE OrderID = ?`,
        [driverID, orderID],
        (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}


module.exports = DB;