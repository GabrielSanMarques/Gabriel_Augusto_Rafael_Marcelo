var express = require("express");
var router = express.Router();

var senha = "aaa";
var login = "aaa";

router.post("/logar", (req, res) => {
  if (req.body.login === login && req.body.passoword === senha) {
    req.session.login = login;
    res.render("inicial");
  } else {
    res.render("index");
  }
});

/* GET home page. */
router.get("/logar", function (req, res, next) {
  if (req.session.email) {
    res.render("index");
  } else {
    res.render("index");
  }
});

module.exports = router;
