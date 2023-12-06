// const express = require('express');
// const router = express.Router();
// // const sql = require('mysql');
// const User = require("../../dataBase/Users/user.js");
// const Todos = require("../../dataBase/Todos/todos.js");
// const Posts = require("../../dataBase/Posts/posts.js");
// // const Comment= require("../../dataBase/Comments/Comment");

// router.get("/", function (req, res, next) {
//     res.render("index", { title: "Express" });
//   });
  
//   // router.get("/student", function (req, res, next) {
//     // getStudent(body).then((data) => {
//     //   console.log("data: ", data);
//     //   res.send(JSON.stringify(data));
//     // });
//   // });
//   // router.get('/teacher', function(req, res, next) {
//   //   res.render('index', { title: 'Express' });
//   // });
//   // router.get('/admin', function(req, res, next) {
//   //   res.render('index', { title: 'Express' });
//   // });
//   // router.get('/classroom', function(req, res, next) {
//   //   res.render('index', { title: 'Express' });
//   // });
//   // router.get('/classroom', function(req, res, next) {
//   //   res.render('index', { title: 'Express' });
//   // });
  
//   //get all
// //   router.get('/' ,(req,res)=>{
// //     getStudent();
// //     res.send();
// //   });
// //   router.get('/classroomandadmins' ,(req,res)=>{
// //     getClassroom();
// //     res.send();
// //   });
// //   router.get('/studentbyclassroom' ,(req,res)=>{
// //     getStudentByClassroom();
// //     res.send();
// //   });
//   /*add*/
// //   router.post("/user", function (req, res, next) {
// //     const body = req.body;
  
// //     res.render("index", { title: "Express" });
// //   });
// router.post("/", function (req, res, next) {
//   const body = req.body;

//   res.render("index", { title: "Express" });
// });
//   router.post("/todos", function (req, res, next) {
//     const body = req.body;
//     console.log("body: ", body);
//     Todos(body).then((data) => {
//       console.log("data: ", data);
//       res.send(JSON.stringify(data));
//     });
//   });
//   router.post("/post", function (req, res, next) {
//     const body = req.body;
//     console.log("body: ", body);
//     Posts(body).then((data) => {
//       console.log("data: ", data);
//       res.send(JSON.stringify(data));
//     });
//   });
//   router.post("/user", function (req, res, next) {
//     const body = req.body;
//     console.log("User: ", User);
//     User(body).then((data) => {
//       console.log("data: ", data);
//       res.send(JSON.stringify(data));
//     });
//   });  
//   router.post("/comments", function (req, res, next) {
//     const body = req.body;
//     console.log("body: ", body);
//     Comments(body).then((data) => {
//       console.log("data: ", data);
//       res.send(JSON.stringify(data));
//     });
//   });
// //   router.post("/school", function (req, res, next) {
// //     const body = req.body;
// //     console.log("body: ", body);
// //     School(body).then((data) => {
// //       console.log("data: ", data);
// //       res.send(JSON.stringify(data));
// //     });
// //   });
  
//   module.exports = router;
  