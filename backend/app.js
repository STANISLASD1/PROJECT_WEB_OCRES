var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

const mongoose = require('mongoose');

const CONNECTION_URL = 'mongodb+srv://stanislas:Stanislas@cluster0.o9eno.mongodb.net/Project1?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true}, () => console.log('Database connected'));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;