var express = require("express");
var router = express.Router();

router.post("/", (req, res) => { });

router.get("/", function (req, res, next) {
    req.params.id;
    res.render("secao/:id/materia");
});

module.exports = router;
