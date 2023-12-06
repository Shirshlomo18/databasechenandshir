var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const createRouter = require('./routes/create');
const postRouter = require("./routes/post");
const commentRouter = require("./routes/comment");
const todoRouter = require("./routes/todo");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use("/create",createRouter);
// app.use("/user",);
// app.use("/post",postRouter);
// app.use("/comment",commentRouter);
// app.use("/todo",todoRouter);


module.exports = app;
