const sql = require("mysql");
const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "shirchen",
});
// Promisify the connection.query method
const queryAsync = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, results) => {
      if (err) {
        // connection.end();
        reject(err);
      } else {
        // connection.end();
        resolve(results);
      }
    });
  });
};

// Promisify the connection.connect method
const connect = () => {
  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        // connection.end()
        reject(err);
      } else {
        // connection.end()
        resolve();
      }
    });
  });
};
module.exports = {
  connect: connect,
  queryAsync: queryAsync,
  connection:connection,
};
