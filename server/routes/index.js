const express = require('express');
const router = express.Router();
const sql=require('mysql');
const fs=require('fs');
// const addStudent = () => {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;

