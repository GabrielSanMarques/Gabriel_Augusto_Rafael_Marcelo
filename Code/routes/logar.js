var express = require("express");
var router = express.Router();

var senha = "aaa";
var email = "aaa";

router.post("/", (req, res) => {
  if (req.body.email === email && req.body.senha === senha) {
    req.session.logado = email;
    res.render("inicial");
  } else {
    res.render("logar");
  }
});

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.session.logado) {
    res.render("inicial");
  } else {
    res.render("logar");
  }
});

module.exports = router;
