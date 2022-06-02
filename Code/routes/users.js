var express = require('express');
var router = express.Router();

var Usuario = require('../bin/usuario')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let u = new Usuario();

  res.send('u.id = ' + u.id);
});

module.exports = router;
