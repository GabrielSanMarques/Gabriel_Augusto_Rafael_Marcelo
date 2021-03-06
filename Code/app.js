const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");

//var indexRouter = require("./routes/index");
var logarRouter = require("./routes/logar");
var criarContaRouter = require("./routes/criar_conta");
var homeRouter = require("./routes/home");
var secaoRouter = require("./routes/secao");
var homeRouter = require("./routes/home");
var perfilRouter = require("./routes/perfil");
var lojaRouter = require("./routes/loja");
var rankingRouter = require("./routes/ranking");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: "abc" }));

//app.use("/", indexRouter);
app.use("/", logarRouter);
app.use("/criar_conta", criarContaRouter);
app.use("/home", homeRouter);
app.use("/perfil", perfilRouter);
app.use("/loja", lojaRouter);
app.use("/ranking", rankingRouter);
app.use("/home/secao/:id/materia", secaoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
