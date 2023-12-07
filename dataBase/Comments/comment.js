const { connection, connect, queryAsync } = require("../help");
const sql = require("mysql");

const Comments = async (obj) => {
  try {
    // await connect(); // Wait for the connection to be established

    // Insert into the comments table
    await queryAsync(
      `INSERT INTO comment (post_id,name,body,email) VALUES (?, ?, ?, ?)`,
      [obj.post_id,obj.name,obj.body,obj.email]
    );

    console.log("insert successfully");

    // Select from the comments table
    const result = await queryAsync(`SELECT * FROM comments`, [
      obj.name,
    ]);
    // connection.end();

    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in Post function:", err);
    return { err };
  } finally {
    // connection.end();
  }
};

const getComments= async () => {
  try {
    // await connect(); // Wait for the connection to be established

    // Insert into the admin table
    const result = await queryAsync(`SELECT * FROM comments`);
    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in Posts function:", err);
    return { err };
  }
};
const deleteComments = async(obj) => {
  try {
    // Wait for the connection to be established
    // await connect();
    
    // Insert into the admin table
    await queryAsync(
      `DELETE FROM comments WHERE title = ?`,
      [obj.title]
    );
    
    // await queryAsync(
      //   `DELETE FROM comment WHERE post_id = ?`,
      //   [obj.id]
    // );
    
    console.log("deleted successfully");
    // Select from the admin table
    return 200;
  } catch (err) {
    console.error("Error in deleteComments function:", err);
    return 500;
  } finally {
    // connection.end();
  }
}
module.exports = {Comments:Comments,getComments:getComments, deleteComments:deleteComments};
