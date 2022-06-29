async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "N0VA-senha",
    database: "db_sistema",
  });
  console.log("Conectou no MySQL!");
  global.connection = connection;
  return connection;
}

// SELECT, INSERT, UPDATE, DELETE
async function selectItem() {
  const conn = await connect();
  return await conn.query("SELECT * FROM Item");
}

async function insertItem(item) {
  const conn = await connect();
  const sql = "INSERT INTO Item(codigo,tipo,nome,descricao) VALUES (?,?,?,?);";
  const values = [item.codigo, item.tipo, item.nome, item.descricao];
  return await conn.query(sql, values);
}

async function updateItem(id, item) {
  const conn = await connect();
  const sql = "UPDATE Item SET tipo=?, nome=? ,descricao=? WHERE codigo=?";
  const values = [item.tipo, item.nome, item.descricao, item.codigo];
  return await conn.query(sql, values);
}

async function deleteItem(codigo) {
  const conn = await connect();
  const sql = "DELETE FROM Item WHERE codigo=?";
  return await conn.query(sql, [codigo]);
}

module.exports = { selectItem, insertItem, updateItem, deleteItem };
// MODULOS A SEREM EXPORTADOS
