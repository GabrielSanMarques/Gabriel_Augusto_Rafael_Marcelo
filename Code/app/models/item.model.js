module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("usuarios", {
        iditems : {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        tipo:{
            type: Sequelize.STRING
        },
        nome: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
    });
    return Item;
}