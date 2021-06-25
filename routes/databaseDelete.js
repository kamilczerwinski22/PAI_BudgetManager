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

router.delete('/delete/:id', (req, res) => {
    const expenseId = req.params.id;
    db.query("DELETE FROM budget WHERE id = ?", expenseId, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Value deleted from database");
        }
    })
})

module.exports = router;