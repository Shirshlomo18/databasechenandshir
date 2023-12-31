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
// const getTodos= async () => {
//   try {
//     await connect(); // Wait for the connection to be established

//     // Insert into the admin table
//     const result = await queryAsync(`SELECT * FROM todos`);
//     console.log("result: ", result);
//     return result;
//   } catch (err) {
//     console.error("Error in Todos function:", err);
//     return { err };
//   }
// };
const getTodos = async () => {
  try {
    // Wait for the connection to be established
    await connect();

    // Fetch all todos from the database
    const result = await queryAsync(`SELECT * FROM todos`);
    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in getTodos function:", err);
    return { error: err.message || "An error occurred" };
  } finally {
    connection.end();
  }
};

const deleteTodo= async(obj)=>{
  try {
    // Wait for the connection to be established
    await connect(); 
    
    // delete the todo from db
    await queryAsync(
      `DELETE FROM todos WHERE id = ?`,
      [obj.id]
      );
      
      console.log("deleted successfully");
      // Select from the admin table
    return 200;
  } catch (err) {
    console.error("Error in DeleteTodo function:", err);
    return { err };
  }finally{
    connection.end();
  }
}

const changeToDoStatus = async(obj)=>{
  try {
    // Wait for the connection to be established
    await connect(); 

    // Insert into the admin table
    await queryAsync(
      `UPDATE todos SET completed = ?`,
      [!obj.completed]
      );
      
      // Select from the admin table
      const result = await queryAsync(`SELECT * FROM todos WHERE name = ?`, 
      [obj.name,]
      );
      
      console.log("result: ", result);
      return result;
    } catch (err) {
      console.error("Error in changeTodoStatus function:", err);
      return { err };
    }finally{
      connection.end();
    }
  }
  
  module.exports = {Todos:Todos, getTodos:getTodos,deleteTodo:deleteTodo,changeToDoStatus:changeToDoStatus};
      // module.exports = { Todos, getTodos, deleteTodo, changeToDoStatus };
