const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
    define: {
        timestamps: false
    }
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.usuario = require("../models/usuario.model.js")(sequelize, Sequelize);
db.item = require("../models/item.model.js")(sequelize, Sequelize);

db.usuario.belongsToMany(db.item, {
  through: "usuario_item",
  as: "items",
  foreignKey: "id_item",
});
db.item.belongsToMany(db.usuario, {
  through: "usuario_item",
  as: "usuarios",
  foreignKey: "id_usuario",
});

module.exports = db;