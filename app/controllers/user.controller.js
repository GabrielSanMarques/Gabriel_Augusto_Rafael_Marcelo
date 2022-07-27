const db = require("../models");
const config = require("../config/auth.config");
const { item } = require("../models");
const { resolveBaseUrl } = require("vite");
const Usuario = db.usuario;

exports.usuarioHome = (req, res) => {
    res.status(200).send("User Content.");
}

exports.getRanking = (req, res) => {
    return Usuario.findAll({
        attributes: ['nome', 'points'],
        limit: 5,
        order: [['points', 'DESC']],
        raw: true,
        nest: true,
    })
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((err) => {
        console.log(">> Erro ao consultar ranking: ", err);
    })
}

exports.getPoints = (req, res) => {
    return Usuario.findOne({
        attributes:['points'],
        where: {
            idusuarios: req.body.id
        }
    })
    .then((result) => {
        res.status(200).send({
            points: result.points
        });
    })
    .catch((err) => {
        console.log(">> Erro ao consultar pontos: ", err);
    })
}

exports.addPoints = (req, res) => {
    Usuario.update({
        points: req.body.points,    
    },
    {
        where: {
            idusuarios: req.body.id
        }
    })
    .then(success => {
        res.send({
            message: `Pontos do usuario ${req.body.id} atualizados para ${req.body.points} com sucesso!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    })
}

/*exports.getProfileImage = (iduser) => {
    return item.findAll({
        attributes: [
            'nome',
        ],
        where: {
            selected: 1,
        }
    })
}*/