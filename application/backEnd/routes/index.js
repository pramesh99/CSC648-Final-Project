/*
Author: Preetham Ramesh
Purpose: API endpoint definitions.
*/

const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/restOwners', async (req,res,next) => { // route is appended to /api in server.js
    try {
        let results = await db.getAllOwners(); // params go here
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/restaurants/:cuisine', async (req,res,next) => { // route is appended to /api in server.js
    try {
        let results = await db.getRestByCuisine(req.params.cuisine); // params go here
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// get all restaurants
router.get('/allRestaurants', async (req, res, next) => {
    try {
        let results = await db.getAllRestaurants();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// query to get all available cuisines
router.get('/allCuisines', async (req, res, next) => {
    try {
        let results = await db.getAllCuisines();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// query for search bar
router.get('/search/:search_input', async (req, res, next) => {
    try {
        let results = await db.searchBarQueryNoCuisine(req.params.search_input);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/search/:cuisine/:search_input', async (req, res, next) => {
    try {
        let results = await db.searchBarQueryWithCuisine(req.params.cuisine, req.params.search_input);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


module.exports = router;