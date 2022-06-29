var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
  if (req.body.logar) {
    res.render("logar");
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
