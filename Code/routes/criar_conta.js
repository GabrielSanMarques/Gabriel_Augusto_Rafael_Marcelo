var express = require('express');
var router = express.Router();

const Usuario = require('../bin/usuario');

router.post('/criar_conta', (req, res) => {
    usuario = new Usuario;
    console.log("Antes do IF");
    if (usuario.validarEmail(req.body.email)) {
        usuario.CriarUsuario(req.body.email, req.body.senha, req.body.cpf, req.body.telefone,
            req.body.rua, req.body.num, req.body.complemento, req.body.cidade, req.body.estado, req.body.cep);
        req.session.login = req.body.email;
        console.log("Deu true!");
        res.render('inicial');
    } else {
        res.render('criar_conta');
        console.log("Email já cadastro!");
    }
})

router.get('/criar_conta', function (req, res, next) {
    console.log("GETTTTTTT");
    res.render('criar_conta');
});

module.exports = router;