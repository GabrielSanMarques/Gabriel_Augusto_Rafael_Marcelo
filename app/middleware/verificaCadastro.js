const db = require("../models")
const Usuario = db.usuario;

const verificaEmailDuplicado = (req, res, next) => {
    console.log(req.body);
    Usuario.findOne({
        where: {
            email: req.body.email
        }
    }).then(usuario => {
        if (usuario) {
            res.status(400).send({
                message: "E-mail já cadastrado!"
            });
            return;
        }
        next();
    });
};

const verificaCadastro = {
    verificaEmailDuplicado: verificaEmailDuplicado
};

module.exports = verificaCadastro;