const express = require('express');
const router = express.Router();
const sql=require('mysql');
// const addStudent = () => {};

const {User,getUser,searchUser,changeUserInfo} = require("/home/hilma/databasechenandshir/dataBase/Users/user.js");
const {Todos,getTodos,deleteTodo,changeToDoStatus} = require("/home/hilma/databasechenandshir/dataBase/Todos/todos.js");
const {Posts,getPosts,deletePost} = require("/home/hilma/databasechenandshir/dataBase/Posts/post.js");
const { useParams } = require('react-router-dom');
// const Comment= require("../../dataBase/Comments/Comment");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/login", async function (req, res, next) {
  const body = req.body;
 searchUser(body).then((data) => {
    console.log("data: ", data);
    if(data.err){
      res.status(404)
      res.send("user not found or wrong password")
      return
    }
    res.send(JSON.stringify(data));
    // res.end();
  }).catch((err)=>{res.status(500); res.send(err)});
});

router.get("/user", function (req, res, next) {
  getUser().then((data) => {
    console.log("data: ", data);
    res.send(JSON.stringify(data));
  });
});
// router.get("todos?userId=${currentUser.id}", function (req, res, next) {
//   getTodos().then((data) => {
//     console.log("data: ", data);
//     res.send(JSON.stringify(data));
//   });
// });
// router.get("/todos/:userId", function (req, res, next) {
//   const userId = req.params.userId;

//   getTodos(userId)
//     .then((data) => {
//       console.log("data: ", data);
//       res.send(JSON.stringify(data));
//     })
//     .catch((error) => {
//       console.error("Error fetching todos:", error);
//       res.status(500).send("Internal Server Error");
//     });
// });
router.get("/post", function (req, res, next) {
  getPosts().then((data) => {
    console.log("data: ", data);
    res.send(JSON.stringify(data));
  });
});

  router.post("/todos", function (req, res, next) {
    const body = req.body;
    console.log("body: ", body);
    Todos(body).then((data) => {
      console.log("data: ", data);
      res.send(JSON.stringify(data));
    });
  });
  router.post("/post", function (req, res, next) {
    const body = req.body;
    console.log("body: ", body);
    Posts(body).then((data) => {
      console.log("data: ", data);
      res.send(JSON.stringify(data));
    });
  });
  router.post("/user", function (req, res, next) {
    const body = req.body;
    console.log("User: ", User);
    User(body).then((data) => {
      console.log("data: ", data);
      res.send(JSON.stringify(data));
    });
  });  
  router.post("/comments", function (req, res, next) {
    const body = req.body;
    console.log("body: ", body);
    Comments(body).then((data) => {
      console.log("data: ", data);
      res.send(JSON.stringify(data));
    });
  });

  router.put("/todos", function (req, res, next) {
    const body = req.body;
    console.log("body: ", body);
    changeToDoStatus(body).then((data) => {
      console.log("data: ", data);
      res.send(JSON.stringify(data));
    });
  });

  router.put("/info", function (req, res, next) {
    const body = req.body;
    console.log("body: ", body);
    changeUserInfo(body).then((data) => {
      console.log("data: ", data);
      res.send(JSON.stringify(data));
    });
  });
  
  router.delete("/post/:id", function (req, res, next) {
    const id= req.url.id;
    console.log("id: ", id);
    deletePost(id).then((data) => {
      console.log("data: ", data);
      res.send(JSON.stringify(data));
    });
  });

  router.delete("/todos/:id", function (req, res, next) {
    const id=req.url.id;
    console.log("id: ", id);
    deleteTodo(id).then((data) => {
      console.log("data: ", data);
      res.send(JSON.stringify(data));
    });
  });
  
  
  module.exports = router;
  
  // router.get("/student", function (req, res, next) {
    // getStudent(body).then((data) => {
      //   console.log("data: ", data);
      //   res.send(JSON.stringify(data));
      // });
      // });
      // router.get('/teacher', function(req, res, next) {
        //   res.render('index', { title: 'Express' });
        // });
// router.get('/admin', function(req, res, next) {
  //   res.render('index', { title: 'Express' });
  // });
  // router.get('/classroom', function(req, res, next) {
    //   res.render('index', { title: 'Express' });
    // });
    // router.get('/classroom', function(req, res, next) {
      //   res.render('index', { title: 'Express' });
    // });
    
    //get all
    //   router.get('/' ,(req,res)=>{
      //     getStudent();
      //     res.send();
      //   });
//   router.get('/classroomandadmins' ,(req,res)=>{
  //     getClassroom();
//     res.send();
//   });
//   router.get('/studentbyclassroom' ,(req,res)=>{
  //     getStudentByClassroom();
  //     res.send();
  //   });
  /*add*/
//   router.post("/user", function (req, res, next) {
  //     const body = req.body;
  
  //     res.render("index", { title: "Express" });
  //   });
  // router.post("/", function (req, res, next) {
    //   const body = req.body;
    
    //   res.render("index", { title: "Express" });
    // });
    
    //   router.post("/school", function (req, res, next) {
      //     const body = req.body;
    //     console.log("body: ", body);
    //     School(body).then((data) => {
    //       console.log("data: ", data);
    //       res.send(JSON.stringify(data));
    //     });
    //   });
    
    
    
    // /* GET home page. */
    // router.get('/', function(req, res, next) {
    //   res.render('index', { title: 'Express' });
    // });