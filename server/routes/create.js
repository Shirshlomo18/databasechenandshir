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


// const files = fs.readdirSync("/home/hilma/projects/databasechenandshir/dataBase/entities/")

// con.connect((err) => {
//     if (err) throw err;
//     files.forEach(async file => {
//         const fileContent = await JSON.parse(fs.readFileSync("/home/hilma/projects/databasechenandshir/dataBase/entities/" + file).toString());
//         let sql = `CREATE TABLE ${fileContent.table_name} (`

//         for (let key in fileContent) {
//             if (key !== "table_name") {
//                 sql += `${key} ${fileContent[key]},`
//             }
//         }
//         con.query(sql.slice(0, -1) + ")", (err) => {
//             if (err) throw err;
            
//         })
//     });
// })

const files = fs.readdirSync("/home/hilma/databasechenandshir/dataBase/data")

con.connect((err) => {
    if (err) throw err;
    files.forEach(async file => {
        const fileContent = await JSON.parse(fs.readFileSync("/home/hilma/databasechenandshir/dataBase/data/" + file).toString());
        let sql = `INSERT INTO ${file.split(".")[0]}(`
        for(let property of fileContent.properties){
            sql += `${property},`
        }
        sql = `${sql.slice(0, -1)}) VALUES`
        for (let item of fileContent.data) {
            let values = "(";
                for(let key in item){
                    if(!key.includes("id")||!key.includes("phone")){
                    values += `'${item[key]}',`
                    }
                    else{
                        values += `${item[key]},`
                    }
                }
            values = values.slice(0, -1) + "),"
            sql += values
            
        }
        con.query(sql.slice(0, -1), (err) => {
            if (err) throw err;
            
        })
    });
})

module.exports = router;