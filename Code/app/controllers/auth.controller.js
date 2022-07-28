const db = require("../models");
const config = require("../config/auth.config");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.cadastro = (req, res) => {
    Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        points: 0
    })
    .then(usuario => {
        res.send({
            message: "Usuário cadastrado com sucesso!"
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    })
};

exports.login = (req, res) => {
    Usuario.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(usuario => {
        if (!usuario) {
            return res.status(401).send({
                message: "Usuário e/ou senha inválidos!",
            })
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            usuario.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Usuário e/ou senha inválidos!"
            });
        }
        var token = jwt.sign({ id: usuario.idusuarios }, config.secret, {
            expiresIn: 86400
        });
        res.status(200).send({
            id: usuario.idusuarios,
            nome: usuario.nome,
            email: usuario.email,
            accessToken: token
        })
    })
    .catch (err => {
        res.status(500).send({
            message: err.message    
        })
    })
};