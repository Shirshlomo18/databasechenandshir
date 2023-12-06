const express = require('express');
const router = express.Router();
const sql=require('mysql');
// const addStudent = () => {};

const {User,getUser,searchUser} = require("/home/hilma/databasechenandshir/dataBase/Users/user.js");
const {Todos,getTodos,deleteTodo,changeToDoStatus} = require("/home/hilma/databasechenandshir/dataBase/Todos/todos.js");
const {Posts,getPosts,deletePost} = require("/home/hilma/databasechenandshir/dataBase/Posts/post.js");
// const Comment= require("../../dataBase/Comments/Comment");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/login", function (req, res, next) {
  searchUser(body).then((data) => {
    console.log("data: ", data);
    if(typeof data === "string"){
      res.status(404)
      res.send("user not found or wrong password")
    }
    res.send(JSON.stringify(data));
  });
});

router.get("/user", function (req, res, next) {
  getUser().then((data) => {
    console.log("data: ", data);
    res.send(JSON.stringify(data));
  });
});
router.get("/todos", function (req, res, next) {
  getTodos().then((data) => {
    console.log("data: ", data);
    res.send(JSON.stringify(data));
  });
});
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

  router.delete("/post", function (req, res, next) {
    const body = req.body;
    console.log("body: ", body);
    deletePost(body).then((data) => {
      console.log("data: ", data);
      res.send(JSON.stringify(data));
    });
  });

  router.delete("/todos", function (req, res, next) {
    const body = req.body;
    console.log("body: ", body);
    deleteTodo(body).then((data) => {
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