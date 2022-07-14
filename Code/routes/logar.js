var express = require("express");
const Usuario = require("../bin/usuario");
var router = express.Router();

let login = [
  { email: "aaa", senha: "aaa" },
  { email: "bbb", senha: "bbb" },
  { email: "ccc", senha: "ccc" }
];

user = new Usuario();

// router.post("/", (req, res) => {
//     if (user.validarEmail(req.body.email)) {
//       if (user.validarSenha(req.body.senha)) {
//         req.session.logado = req.body.email;
//         res.render("home");
//       }
//       console.log("Vai pro break");
//       break;
//     }
//   res.render("logar");
// });


router.post("/", (req, res) => {
  for (i = 0; i < login.length; i++) {
    if (req.body.email === login[i].email) {
      if (req.body.senha === login[i].senha) {
        req.session.logado = req.body.email;
        res.render("home");
      }
      console.log("Vai pro break");
      break;
    }
  }
  res.render("logar");
});

router.get("/", function (req, res, next) {
  if (req.session.logado) {
    res.render("home");
  } else {
    res.render("logar");
  }
});

module.exports = router;
