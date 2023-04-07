const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/rest_owners', async (req,res,next) => { // route is appended to /api in server.js
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

module.exports = router;