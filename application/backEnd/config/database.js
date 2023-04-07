require('dotenv').config();
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
// });

db.connect((err) => {
    if(err) throw err;
    console.log("connected");
})

// let sql = "SELECT * FROM Restaurant;";

// pool.execute(sql,function (err, result){
//     if(err) throw err;

//     console.log(result);
// })

// module.exports = pool.promise();