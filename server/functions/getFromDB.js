const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "z10mz10m",
    database: "shirchen"
})

function getFromDB(sql){
    con.connect((err) => {
        if (err) throw err;
        con.query(sql, (err) => {
            if (err) throw err;
            return(result)
        })
    })
}