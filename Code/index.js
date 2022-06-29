(async () => {
  const db = require("./db");
  console.log("Começou!");

  //   console.log("INSERT INTO Item");
  //   await db.insertItem({
  //     codigo: 4,
  //     tipo: 1,
  //     nome: "avatar_menina",
  //     descricao: "avatar de uma menina branca",
  //   });

  console.log("SELECT * FROM Item");
  const [clientes] = await db.selectItem();
  console.log(clientes);

  //   console.log("UPDATE FROM Item");
  //   const result = await db.updateItem(3, {
  //     tipo: 2,
  //     nome: "avatar_adulto",
  //     descricao: "avatar de um homem adulto",
  //     codigo: 3,
  //   });
  //   console.log(result);

  //   console.log("DELETE FROM Item");
  //   const result = await db.deleteItem(4);
  //   console.log(result);
})();
