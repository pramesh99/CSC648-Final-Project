const path = require('path');
const express = require('express');
const app = express();

const users = ['Preetham', 'Shauhin', 'Hieu', 'Derrick', 'Lin'];

app.get('/test', (req, res) => {
    console.log('at test');
    res.json({'users': users});
})

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './frontEnd/build', 'index.html'));
})

app.listen(3001, () => {console.log("Server started on port 3001")});