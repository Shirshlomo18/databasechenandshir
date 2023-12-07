const { connect, queryAsync,connection } = require("../help");
const sql = require("mysql");


const User = async (obj) => {
  console.log("obj: ", obj);
  console.log("User");

  try {
    // await connect(); // Wait for the connection to be established

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
      `INSERT INTO password (user_id,password) VALUES (?, ?)`,
      [result[0].id,obj.password]
    );
    console.log("insert successfully");


    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in User function:", err);
    return { err };
  }finally{
    // connection.end();
  }
};
const getUser = async () => {
  try {
    // await connect(); // Wait for the connection to be established

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
    // await connect(); // Wait for the connection to be established

    // select
    const result = await queryAsync(`SELECT * FROM user WHERE name = ?`, [
      obj.name,
    ]);
    if(!result.length) throw err
    console.log("user we are ooki ng for is ",result)
    const userPassword = await queryAsync(`SELECT * FROM password WHERE user_id=?`,
    [result[0].id]);
    console.log("user is ",userPassword)
    if(!userPassword.length) {
      console.log("no user found")
      throw(err);
    }
  if (userPassword[0].password == obj.password){
    return result;
  }
  
  else{
    throw err;
  }

} catch (err) {
  console.error("Error in User function:", err);
    return { err };
  }finally{
    // connection.end();
  }
}

const changeUserInfo = async (obj) => {
  try {
    await connect();

    // Use parameterized queries to prevent SQL injection
    const updateQuery = 'UPDATE user SET name=?, email=?, phone=? WHERE id=?';
    const result = await queryAsync(updateQuery, [
      obj.name,
      obj.email,
      obj.phone,
      obj.id,
    ]);

    // Check if any rows were affected by the update
    if (result.affectedRows === 0) {
      console.log("No user found for the provided ID");
      throw new Error("No user found for the provided ID");
    }

    // Retrieve the updated user
    const updatedUserQuery = 'SELECT * FROM user WHERE id = ?';
    const updatedUser = await queryAsync(updatedUserQuery, [obj.id]);

    if (!updatedUser.length) {
      console.log("No user found after update");
      throw new Error("No user found after update");
    }

    return result;
  } catch (err) {
    console.error("Error updating user:", err);
    throw err;
  }
};

module.exports = {User: User , getUser:getUser,searchUser:searchUser,changeUserInfo:changeUserInfo};

