//import Endereco from "./endereco.js";

function Usuario() {
  this.id = 0;
  this.senha = "senha";
  this.email = "a";
  this.nivel = 0;
  this.cristais = 0;
  this.xp = 0;
  //this.endereco = new Endereco();
  this.cpf = "000.000.000-00";
  this.telefone = "(00) 0000-0000";
  this.certificado = null;
  this.licoesRealizadas = []; //lista com o codigo das licoes ja realizadas
  this.listaAmigos = []; //lista com o id de todos os amigos do usuario
  this.listaItens = [];
  this.listaConquistas = [];
  this.listaAnotacoes = [];

  function CriarUsuario(
    email,
    senha,
    cpf = undefined,
    telefone = undefined,
    rua = undefined,
    num = undefined,
    complemento = undefined,
    cidade = undefined,
    estado,
    cep = undefined
  ) {
    const db_Usuarios = JSON.parse(localStorage.getItem("db_Usuarios")) ?? [];
    db_Usuarios.push(usuario);
    localStorage.setItem("db_Usuarios", JSON.stringify(db_Usuarios));

    this.id = Math.random() * 100; //gera um id aleatório entre 0 e 99, verificar se este id já existe no BD e inseri-lo
    this.email = email;
    this.senha = senha;
    this.cpf = cpf;
    this.telefone = telefone;
    this.endereco.rua = rua;
    this.endereco.num = num;
    this.endereco.complemento = complemento;
    this.endereco.cidade = cidade;
    this.endereco.estado = estado;
    this.endereco.cep = cep;
  };

  this.validarEmail = function(email) {
    //if(nao existe){
    this.email = email; //verificar se existe no DB
    return true;
    //else {return false}
  };

  this.validarSenha = function(senha) {
    //if(nao existe){
    this.senha = senha; //verificar se existe no DB
    return true;
    //else {return false}
  };

  this.LerUsuario = function() {
    JSON.parse(localStorage.getItem("db_Usuarios")) ?? [];
  }

  this.Remover = function(usuario) {
    const db_Usuarios = LerUsuario();
    db_Usuarios.splice(usuario.id, 1);
    setLocalStorage(db_Usuarios);
  }

  this.Update = function(usuario) {
    const db_Usuarios = LerUsuario();
    db_Usuarios[usuario.id] = usuario;
    setLocalStorage(db_Usuarios);
  }

  this.AlterarSenha = function(senhaAntiga, novaSenha) {}

  this.AlterarEmail = function(emailAntigo, novoEmail) {
    if (this.email === emailAntigo) this.email = novoEmail;
  }

  this.AlterarTelefone = function(novoTelefone) {
    this.telefone = novoTelefone;
  }

  this.AlterarEndereco = function() {}

  this.SubirNivel = function() {
    this.nivel = this.nivel + 1;
  }

  this.GanharCristais = function(quantidade) {
    this.cristais = this.cristais + quantidade;
  }

  this.GanharXp = function(quantidade) {
    this.xp = this.xp + quantidade;
  }

  this.RealizarLicao = function(idLicao) {
    this.licoesRealizadas.push(idLicao);
  }

  this.EnviarReporte = function() {}

  this.CadastrarAmigo = function(idAmigo) {
    this.listaAmigos.push(idAmigo);
  }

  this.RemoverAmigo = function(idAmigo) {
    var index = this.listaAmigos.indexOf(idAmigo);
    this.listaAmigos.splice(index, 1);
  }

  this.AvaliarConteudo = function(idConteudo) {}

  this.EmitirCertificado = function() {}

  this.CriarAnotacao = function(idLicao) {}

  this.removerAnotacao = function(idLicao) {}

  this.ComprarItem = function(idItem) {}

  this.EnviarPresente = function(idAmigo) {}

  this.ReceberPresente = function() {}

  this.MarcarConteudo = function(idLicao) {}

  this.DesmarcarConteudo = function(idLicao) {}

  this.CriarComentario = function(idLicao, texto) {}

  this.ExcluirComentario = function(idComentario) {}

  this.AdquirirConquista = function() {}

  this.FazerAnotacao = function(idLicao, texto) {}
};

module.exports = Usuario;
