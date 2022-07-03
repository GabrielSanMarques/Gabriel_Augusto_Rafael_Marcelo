var express = require("express");
var router = express.Router();

router.post("/", (req, res) => { });

/* GET home page. */
router.get("/", function (req, res, next) {
    if (req.session.logado) {
        res.render("inicial");
    } else {
        res.render("logar");
    }
});

module.exports = router;