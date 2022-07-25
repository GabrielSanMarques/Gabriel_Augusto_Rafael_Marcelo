const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const Usuario = db.usuario;

const verificaToken = (req, res, next) => {
    let token= req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
            message: "Nenhum token provido!"
        });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Não autorizado!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

const authJwt = {
    verificaToken: verificaToken
};

module.exports = authJwt;
