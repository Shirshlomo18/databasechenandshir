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
    // Select from the admin table
    const result = await queryAsync(`SELECT * FROM user WHERE name = ?`, [
      obj.name,
    ]);
    await queryAsync(
      `INSERT INTO password (user_id,password) VALUES (?, ?,)`,
      [result.id,obj.password]
    );
    console.log("insert successfully");


    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in User function:", err);
    return { err };
  }finally{
    connection.end();
  }
};
const getUser = async () => {
  try {
    await connect(); // Wait for the connection to be established

    // Insert into the admin table
    const result = await queryAsync(`SELECT * FROM user`);
    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in User function:", err);
    return { err };
  }
};


const searchUser = async(obj)=>{
  try {
    await connect(); // Wait for the connection to be established

    // select
    const result = await queryAsync(`SELECT * FROM user WHERE name = ?`, [
      obj.name,
    ]);
    
    const userPassword = await queryAsync(`SELECT * FROM password WHERE user_id=?`,
    [result.id]);
    
  if (userPassword.password === obj.password){
    return result;
  }
  
  else{
    res.status(404)
    return('user not found or wrong password')
  }

} catch (err) {
  console.error("Error in User function:", err);
    return { err };
  }finally{
    connection.end();
  }
}
module.exports = {User: User , getUser:getUser,searchUser:searchUser};

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

