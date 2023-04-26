/*
Author: Preetham Ramesh
Purpose: Server for application.
*/

const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const cors = require('cors'); // for testing, allows all devs to access DB while running app locally
const apiRouter = require('./routes');

const app = express();

app.use(cors()); 
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../frontEnd/my-app/build')));
app.use(express.json()); // allows body to be json

app.use('/api/', cors(),  apiRouter); //root path


app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontEnd/my-app/build', 'index.html'));
})

app.listen(3001, () => {console.log("Server started on port 3001")});
