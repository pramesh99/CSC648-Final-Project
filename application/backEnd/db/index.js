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
        pool.query('SELECT * FROM Restaurant', (err, results) => {
            if (err) {
                return reject(err);
            }

            return resolve(results);
        });
    });
}

DB.getRestaurantByName = (name) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM Restaurant WHERE RestaurantName = ?',
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
        pool.query('SELECT * FROM Restaurant WHERE RestaurantCuisine = ?',
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
        pool.query('SELECT DISTINCT RestaurantCuisine from Restaurant ORDER BY RestaurantCuisine ASC',
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
        pool.query('SELECT * FROM Restaurant',
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                const fuse_dict = results;
                const fuse = new Fuse(fuse_dict, {threshold: 0.4, keys: ['RestaurantName', 'RestaurantCuisine', 'RestaurantDescription']});
                console.log(fuse.search(search_input))
                return resolve(fuse.search(search_input));
            });
    });
}

DB.searchBarQueryWithCuisine = (cuisine, search_input) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM Restaurant WHERE RestaurantCuisine = ?',
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
        // let q = 'INSERT INTO SFSUCustomer (SFSUCustomerID, SFSUCustomerName, SFSUCustomerEmail, SFSUCustomerPhone, SFSUCustomerPassword) VALUES ("Balthazar McSquishy", "mcsquishb@sfsu.edu", "1231231234", "password8!")';
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
        // let q = 'INSERT INTO SFSUCustomer (SFSUCustomerID, SFSUCustomerName, SFSUCustomerEmail, SFSUCustomerPhone, SFSUCustomerPassword) VALUES ("Balthazar McSquishy", "mcsquishb@sfsu.edu", "1231231234", "password8!")';
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
        // let q = 'INSERT INTO SFSUCustomer (SFSUCustomerID, SFSUCustomerName, SFSUCustomerEmail, SFSUCustomerPhone, SFSUCustomerPassword) VALUES ("Balthazar McSquishy", "mcsquishb@sfsu.edu", "1231231234", "password8!")';
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

module.exports = DB;