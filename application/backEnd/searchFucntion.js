const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const db = require ("./config/database");

function search(req, res, next)
{
    var searchTerm = req.query.search;
    var category = req.query.category;

    let query = "SELECT * FROM Restaurant";

    if(searchTerm != "" && category != "")
    {
        console.log("No search no category");
        query = `SELECT * FROM Restaurant WHERE RestaurantCuisine = '` + category + `' AND RestaurantName LIKE '%` + searchTerm + `%'`;
    }
    else if (searchTerm != "" && category == "")
    {
        console.log("No search but category");
        query = `SELECT * FROM Restaurant WHERE RestaurantName LIKE '%` + searchTerm + `%'`;
    }
    else if (searchTerm == "" && category != "")
    {
        console.log("Search but no category");
        query = `SELECT * FROM Restaurant WHERE RestaurantCuisine = '` + category + `'`;
    }

    db.query(query, (err, result) => {
        if(err){
            req.searchResult = "";
            req.searchTerm = "";
            req.category = "";
            next();
        }

        req.searchResult = result;
        req.searchTerm = searchTerm;
        req.category = category;

        next();
    });
} 

app.get('/search', search, (req, res) => {
    var searchResult = req.searchResult;
    res.render({
        results: searchResult.length,
        searchTerm: req.searchTerm,
        searchResult: req.searchResult,
        category: req.category 
    });
    console.log(searchResult);
})

module.exports = router;