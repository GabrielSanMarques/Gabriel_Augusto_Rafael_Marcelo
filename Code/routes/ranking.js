var express = require("express");
var router = express.Router();

router.post("/", (req, res) => { });

router.get("/", function (req, res, next) {
    if (req.session.logado) {
        res.render("ranking");
    } else {
        res.render("logar");
    }
});

module.exports = router;