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


const files = fs.readdirSync("/home/hilma/databasechenandshir/dataBase/entities/")

con.connect((err) => {
       
    if (err) throw err;
    files.forEach(async file => {
        const fileContent = await JSON.parse(fs.readFileSync("/home/hilma/databasechenandshir/dataBase/entities/" + file).toString());
        let sql = `CREATE TABLE IF NOT EXISTS ${fileContent.table_name} (`

        for (let key in fileContent) {
            if (key !== "table_name") {
                sql += `${key} ${fileContent[key]},`
            }
        }
        con.query(sql.slice(0, -1) + ")", (err) => {
            if (err) throw err;
        })
    });
    // con.query("CREATE DATABASE IF NOT EXISTS DB", (err) => {
    //     if (err) {
    //       console.log("err in creating DB", err);
    //       return;
    //     }
    
    //     console.log("Database 'DB' created or already exists");
    
    //     // Switch to the 'DB' database
    //     connection.query("USE DB", (err) => {
    //       if (err) {
    //         console.log("err connecting to DB:", err);
    //         return;
    //       }
    //     }) 
})

module.exports = router;