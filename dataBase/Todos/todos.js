const { connect, queryAsync , connection } = require("../help");
const sql = require("mysql");


const Todos = async (obj) => {
  console.log("obj: ", obj);
  console.log("Todos");

  try {
    await connect(); // Wait for the connection to be established

    // Insert into the admin table
    await queryAsync(
      `INSERT INTO todos (user_id,title,completed) VALUES (?, ?, ?)`,
      [obj.user_id, obj.title, obj.completed]
    );

    console.log("insert successfully");

    // Select from the admin table
    const result = await queryAsync(`SELECT * FROM todos WHERE name = ?`, [
      obj.name,
    ]);

    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in Todos function:", err);
    return { err };
  }finally{
    connection.end();
  }
};

const deleteTodo= async(obj)=>{
  try {
    // Wait for the connection to be established
    await connect(); 

    // Insert into the admin table
    await queryAsync(
      `DELETE FROM todos WHERE title = ?`,
      [obj.title]
    );

    console.log("deleted successfully");
    // Select from the admin table
    return;
  } catch (err) {
    console.error("Error in Todos function:", err);
    return { err };
  }finally{
    connection.end();
  }
}

module.exports = Todos;
