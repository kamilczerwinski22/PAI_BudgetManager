const express = require('express');
const router = express.Router();

const mysql = require('mysql2');
const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} = process.env;
const db = mysql.createConnection({
    host:  DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
})
db.connect();

/* GET home page. */
router.post('/', function(req, res, next) {
    const expenseName = req.body.name;
    const expenseCost = req.body.cost;

    const sql = "INSERT INTO budget (name, cost) VALUES (?, ?)";
    db.query(sql, [expenseName, expenseCost], (err,data) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values added to database")
        }
    });
});

module.exports = router;
