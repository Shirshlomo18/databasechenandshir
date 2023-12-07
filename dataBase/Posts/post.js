const { connection, connect, queryAsync } = require("../help");
const sql = require("mysql");

const Posts = async (obj) => {
  try {
    // await connect(); // Wait for the connection to be established

    // Insert into the admin table
    await queryAsync(
      `INSERT INTO post (user_id,title,body) VALUES (?, ?, ?)`,
      [obj.user_id, obj.title, obj.body]
    );

    console.log("insert successfully");

    // Select from the admin table
    const result = await queryAsync(`SELECT * FROM post`, [
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

const getPosts= async () => {
  try {
    // await connect(); // Wait for the connection to be established

    // Insert into the admin table
    const result = await queryAsync(`SELECT * FROM post`);
    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in Posts function:", err);
    return { err };
  }
};
const deletePost = async(id) => {
  try {
    // Wait for the connection to be established
    // await connect();
    
    // Insert into the admin table
    await queryAsync(
      `DELETE FROM post WHERE id = ?`,
      [id]
    );
    
    // await queryAsync(
      //   `DELETE FROM comment WHERE post_id = ?`,
      //   [obj.id]
    // );
    
    console.log("deleted successfully");
    // Select from the admin table
    return 200;
  } catch (err) {
    console.error("Error in deletePost function:", err);
    return 500;
  } finally {
    // connection.end();
  }
}
module.exports = {Posts:Posts,getPosts:getPosts, deletePost:deletePost};
