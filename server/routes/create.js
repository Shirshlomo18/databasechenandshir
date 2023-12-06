var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const fs = require('fs');


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "z10mz10m",
    database: "shirchen"
})


const files = fs.readdirSync("/home/hilma/projects/databasechenandshir/dataBase/entities/")

con.connect((err) => {
    if (err) throw err;
    files.forEach(async file => {
        const fileContent = await JSON.parse(fs.readFileSync("/home/hilma/projects/databasechenandshir/dataBase/entities/" + file).toString());
        let sql = `CREATE TABLE ${fileContent.table_name} (`

        for (let key in fileContent) {
            if (key !== "table_name") {
                sql += `${key} ${fileContent[key]},`
            }
        }
        con.query(sql.slice(0, -1) + ")", (err) => {
            if (err) throw err;
        })
    });
})

module.exports = router;