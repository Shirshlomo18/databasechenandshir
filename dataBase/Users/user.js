const { connect, queryAsync,connection } = require("../help");
const sql = require("mysql");


const User = async (obj) => {
  console.log("obj: ", obj);
  console.log("User");

  try {
    await connect(); // Wait for the connection to be established

    // Insert into the admin table
    await queryAsync(
      `INSERT INTO user (name,email,phone) VALUES (?, ?, ?)`,
      [obj.name, obj.email, obj.phone]
    );

    console.log("insert successfully");

    // Select from the admin table
    const result = await queryAsync(`SELECT * FROM user WHERE name = ?`, [
      obj.name,
    ]);

    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in User function:", err);
    return { err };
  }finally{
    connection.end();
  }
};
const getUser= async (data)=>{
console.log('data');

}
// const User = async (obj) => {
//   console.log("Received data: ", obj);

//   try {
//     await connect();

//     const sqlQuery = `INSERT INTO user (name, email, phone) VALUES (?, ?, ?)`;
//     console.log("SQL Query: ", sqlQuery);

//     await queryAsync(sqlQuery, [obj.name, obj.email, obj.phone]);
//     console.log("Insert successful");

//     const result = await queryAsync(`SELECT * FROM user WHERE name = ?`, [obj.name]);
//     console.log("Result: ", result);

//     return result;
//   } catch (err) {
//     console.error("Error in User function:", err);
//     return { error: err.message };
//   }
// };

module.exports = User;
