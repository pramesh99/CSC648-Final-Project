/*
Author: Preetham Ramesh
Purpose: Server for application.
*/

const path = require('path');
const express = require('express');
const apiRouter = require('./routes');

const app = express();

app.use(express.static(path.resolve(__dirname, '../frontEnd/my-app/build')));
app.use(express.json()); // allows body to be json

app.use('/api/', apiRouter); //root path


app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontEnd/my-app/build', 'index.html'));
})

app.listen(3001, () => {console.log("Server started on port 3001")});
