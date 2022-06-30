var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

module.exports = router;
