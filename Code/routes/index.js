var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
  if (req.body.email === login && req.body.senha === senha) {
    req.session.email = login;
    res.render("index");
  } else {
    res.render("criar_conta");
  }
});

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.session.email) {
    res.render("inicial");
  } else {
    res.render("index");
  }
});

module.exports = router;
