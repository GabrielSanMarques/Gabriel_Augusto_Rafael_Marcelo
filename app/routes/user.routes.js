const authJwt = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get(
        "/api/test/user",
        [authJwt.authJwt.verificaToken],
        controller.usuarioHome
    );
    app.get(
        "/api/data/ranking",
        controller.getRanking
    );
    app.post(
        "/api/data/get_points",
        controller.getPoints
    );
    app.post(
        "/api/data/add_points",
        controller.addPoints
    );
}; 