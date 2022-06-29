var express = require('express');
var router = express.Router();

var login = "aaa";
var senha = "aaa"

router.post('/', (req, res)=> {
  if(req.body.login === login && req.body.passoword === senha){
    req.session.login = login;
    res.render('inicial');
  } else {
    res.render('index');
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.login){
    res.render('inicial');
  } else {
    res.render('index');
  }
});

module.exports = router;
