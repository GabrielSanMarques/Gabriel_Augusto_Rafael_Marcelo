const Materia = function () {
  this.codigo = codigo;
  this.nome = nome;
  this.descricao = descricao;
  this.explicacao = explicacao;

  this.CriarMateria = function(materia) {
    const db_Materias = JASON.parce(localStorage.getItem("db_Materias")) ?? [];
    db_Materias.push(materia);
    localStorage.setItem("db_Materias", JSON.stringify(db_Materias));
  }

  this.LerMateria = function() {
    JASON.parce(localStorage.getItem("db_Materias")) ?? [];
  }

  this.Remover = function(materia) {
    const db_Materias = LerMateria();
    db_Materias.splice(materia.id, 1);
    setLocalStorage(db_Materias);
  }

  this.Update = function(materia) {
    const db_Materias = LerMateria();
    db_Materias[materia.id] = materia;
    setLocalStorage(db_Materias);
  }
};

const materiaExemplo = new Materia();
materiaExemplo.codigo = "01";
materiaExemplo.nome = "Lei dos Senos";
materiaExemplo.descricao = "Mostra a lei de Senos";
materiaExemplo.explicacao =
  "A Lei dos Senos determina que num triângulo qualquer, a relação do seno de um ângulo é sempre proporcional à medida do lado oposto a esse ângulo.";
