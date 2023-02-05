var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
let todomodel = require("../todobackend/models/todo");
require('dotenv').config()

mongoose.connect("mongodb+srv://" + process.env.DB_NAME + ":" + process.env.DB_PASS + "@cluster0.e0v6l0u.mongodb.net/todo")
.then(value=>{console.log("connected")}, error => {console.log("mongodb error")})



  if (todomodel.findOne("Luke")){
   
    console.log("Luke Exists..")

  }

  else {
    console.log("Luke doesn't exist... Adding")
    let name = new todomodel({name: "Luke", todolist:["Eden","Eden","Joyce"]})
    name.save() 
  }

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req,res,next)=>{
  req.answer = "hello"
 
},indexRouter);

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
