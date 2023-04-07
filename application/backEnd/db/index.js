/*
Author: Preetham Ramesh
Purpose: Store all database queries
*/

const mysql = require('mysql');

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

module.exports = DB;