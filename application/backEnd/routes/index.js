/*
Author: Preetham Ramesh
Purpose: API endpoint definitions.
*/

const express = require('express');
const db = require('../db');
const router = express.Router();
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;


router.post('/test', async (req, res, next) => {
    try {
        fetch('http://localhost:3001/api/submit/customerOrder', {method: 'POST', headers: {'Content-Type': 'application/json'},
             body: `{"OrderID": "1", CustomerID: "1", DriverID: "1", RestaurantID: "1", OrderTime: "6PM", DeliveryTime: "7PM", DeliveryAddress: "ur moms house",
            AdditionalNotes: "", OrderDiscounts: "", OrderPrice: "69.69", OrderStatus: "2", Items: [{1: {count: "2", price: ""12.12"}}]}`}
             );
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

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
        let temp = await db.searchBarQueryWithCuisine(req.params.cuisine, " ");
        let results = [];
        for (let i = 0; i < temp.length; i++){
            results.push(temp[i].item);
        }
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

router.get('/restaurant/:name', async (req, res, next) => {
    try {
        let results = await db.getRestaurantByName(req.params.name);
        res.json(results);
    } catch (e) {
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
router.get('/searchNoCuisine/:search_input', async (req, res, next) => {
    try {
        let temp = await db.searchBarQueryNoCuisine(req.params.search_input);
        let results = [];
        for (let i = 0; i < temp.length; i++){
            results.push(temp[i].item);
        }
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/searchWithCuisine/:cuisine/:search_input', async (req, res, next) => {
    try {
        let temp = await db.searchBarQueryWithCuisine(req.params.cuisine, req.params.search_input);
        let results = [];
        for (let i = 0; i < temp.length; i++){
            results.push(temp[i].item);
        }
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/submit/registrationForm', async (req, res, next) => {
    try {
        const formData = req.body;
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hash = await bcrypt.hash(formData.password, salt);
        if (formData.r_type === 'SFSUCustomer'){
            let results = await db.SFSUCustomerReg(formData.name, formData.email, formData.phone, hash);
            res.json(results);
        } else if (formData.r_type === 'Driver') {
            let results = await db.DriverReg(formData.name, formData.email, formData.phone, hash);
            res.json(results);
        } else if (formData.r_type === 'RestaurantOwner'){
            let results = await db.RestaurantOwnerReg(formData.name, formData.email, formData.phone, hash);
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

router.post('/submit/registerRestaurant', async (req, res, next) => {
    try{
        const formData = req.body;
        let results = await db.RestaurantReg();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/submit/customerOrder', async (req, res, next) => {
    try {
        const formData = req.body;
        let results = await db.enterOrder(
            formData.CustomerID,
            formData.DriverID,
            formData.RestaurantID,
            formData.OrderTime,
            formData.DeliveryTime,
            formData.DeliveryAddress,
            formData.AdditionalNotes,
            formData.OrderDiscounts,
            formData.OrderPrice,
            formData.OrderStatus
        );

        // for (let i = 0; i < formData.Items.length; i++){
        //     results = await db.enterOrderItems(formData[i].menuItemID, formData[i].menuItemID.count, formData[i].menuItemID.quantity);
        // }
            
        res.json(results);
        //could implement pseudo-transcations by catching error and deleting rows just inserted
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const formData = req.body;
        let results;
        if (formData.r_type === 'SFSUCustomer'){
            results = await db.getSFSUCustomer(formData.email);
            if (results.length === 0){throw "email"}
            if (!await bcrypt.compare(formData.password, results[0].SFSUCustomerPassword))
            {
                throw "password"
            }
        } else if (formData.r_type === 'Driver') {
            results = await db.getDriver(formData.email);
            if (results.length === 0){throw "email"}
            if (!await bcrypt.compare(formData.password, results[0].DriverPassword)){
                throw "password"
            }
        } else if (formData.r_type === 'RestaurantOwner'){
            results = await db.getRestaurantOwner(formData.email);
            if (results.length === 0){throw "email"}
            if (!await bcrypt.compare(formData.password, results[0].RestaurantOwnerPassword)){
                throw "password"
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

router.get('/restaurantMenu/:restaurant', async (req, res, next) => {
    try {
        let results = await db.getRestaurantMenu(req.params.restaurant);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/order/statusNum/:statusNum', async (req, res, next) => {
    try {
        let results = await db.getOrderByStatusNum(req.params.statusNum);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/order/driverID/:driverID', async (req, res, next) => {
    try {
        let results = await db.getOrderByDriverID(req.params.driverID);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router.get('/order/restaurantID/:restID', async (req, res, next) => {
    try {
        let results = await db.getOrderByRestID(req.params.restID);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/order/updateStatus/:orderID/:statusNum', async (req, res, next) => {
    try {
        let results = await db.updateOrderStatus(req.params.orderID, req.params.statusNum);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/order/updateDriver/:orderID/:driverID', async (req, res, next) => {
    try {
        let results = await db.updateDriverID(req.params.orderID, req.params.driverID);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/order/deleteOrder/:orderID', async (req, res, next) => {
    try {
        let results = await db.deleteOrder(req.params.orderID);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/order/getOrder/:customerID', async (req, res, next) => {
    try {
        let results = await db.getOrderByCustID(req.params.customerID);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;
