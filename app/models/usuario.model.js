module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuarios", {
        idusuarios : {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nome:{
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        points: {
            type: Sequelize.INTEGER
        }
    });
    return Usuario;
}