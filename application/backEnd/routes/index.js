/*
Author: Preetham Ramesh
Purpose: API endpoint definitions.
*/

const express = require('express');
const db = require('../db');
const { application } = require('express');
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

// get restuarants by category
router.get('/search/:cuisine', async (req,res,next) => { // route is appended to /api in server.js
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

// query to get all available cuisines for dropdown
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
        // fetch('http://localhost:3001/api/submit/registration_form', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: '{"r_type": "driver"}'});
        // ^^ THIS WORKS GO FROM HERE
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/submit/registration_form', async (req, res, next) => {
    try {
        const formData = req.body;
        if (formData.r_type === 'SFSUCustomer'){
            let results = await db.SFSUCustomerReg(formData.name, formData.email, formData.phone, formData.password);
            res.json(results);
        } else if (formData.r_type === 'Driver') {
            let results = await db.DriverReg(formData.name, formData.email, formData.phone, formData.password);
            res.json(results);
        } else if (formData.r_type === 'RestaurantOwner'){
            let results = await db.RestaurantOwnerReg(formData.name, formData.email, formData.phone, formData.password);
            res.json(results);
        }
        // console.log(formData);
    } catch(e){
        console.log(e);
        if (e.code == 'ER_DUP_ENTRY' || e.errno == 1062){
            res.status(409).send('Error: email is already registered.');
        } else {
            res.sendStatus(500);
        }
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const formData = req.body;
        let results;
        if (formData.r_type === 'SFSUCustomer'){
            results = await db.getSFSUCustomer(formData.email);
            if (results.length === 0){throw "email"}
            if (formData.password != results[0].SFSUCustomerPassword){
                throw "password";
            }
        } else if (formData.r_type === 'Driver') {
            results = await db.getDriver(formData.email);
            if (results.length === 0){throw "email"}
            if (formData.password != results[0].DriverPassword){
                throw "password";
            }
        } else if (formData.r_type === 'RestaurantOwner'){
            results = await db.getRestaurantOwner(formData.email);
            if (results.length === 0){throw "email"}
            if (formData.password != results[0].RestaurantOwnerPassword){
                throw "password";
            }
        }
        res.json(results);
    } catch(e){
        // handle invalid login
        if (e === "email"){
            res.status(401).send("Invalid credentials: Email does not exist in database.");
        } else if (e === "password") {
            res.status(401).send("Invalid credentials: Password is incorrect.");
        } else {
            console.log(e);
            res.sendStatus(500);
        }
    }
});

module.exports = router;
