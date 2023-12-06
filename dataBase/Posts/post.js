const { connection,connect, queryAsync } = require("../help");
const sql = require("mysql");

const Posts = async (obj) => {
  console.log("obj: ", obj);
  console.log("Posts");

  try {
    await connect(); // Wait for the connection to be established

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

    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in Post function:", err);
    return { err };
  }finally{
    connection.end();
  }
};

module.exports = Posts;
