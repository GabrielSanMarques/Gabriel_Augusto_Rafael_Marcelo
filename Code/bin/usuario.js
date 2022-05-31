
function Usuario(){
    this.id = 0;
    this.senha = 'senha';
    this.email = 'a';
    this.nivel = 0;
    this.cristais = 0;
    this.xp = 0;
    this.endereco = new Endereco();
    this.cpf = '000.000.000-00';
    this.telefone = '(00) 0000-0000';
    this.certificado = null;
    this.licoesRealizadas = []; //lista com o codigo das licoes ja realizadas
    this.listaAmigos = []; //lista com o id de todos os amigos do usuario
    this.listaItens = [];
    this.listaConquistas = [];
    this.listaAnotacoes = [];

    function Cadastrar(){}

    function Remover(){}

    function RealizarLogin(_login, _senha){
        if(_login === this.login && _senha === this.senha)
            return true;
        return false;
    }

    function AlterarSenha(senhaAntiga, novaSenha){}

    function AlterarEmail(emailAntigo, novoEmail){
        if(this.email === emailAntigo)
            this.email = novoEmail;
    }

    function AlterarTelefone(novoTelefone){
        this.telefone = novoTelefone;
    }

    function AlterarEndereco(){}

    function SubirNivel(){
        this.nivel = this.nivel + 1;
    }

    function GanharCristais(quantidade){
        this.cristais = this.cristais + quantidade;
    }

    function GanharXp(quantidade){
        this.xp = this.xp + quantidade;
    }

    function RealizarLicao(idLicao){
        this.licoesRealizadas.push(idLicao);
    }

    function EnviarReporte(){}

    function CadastrarAmigo(idAmigo){
        this.listaAmigos.push(idAmigo);
    }

    function RemoverAmigo(idAmigo){
        var index = this.listaAmigos.indexOf(idAmigo);
        this.listaAmigos.splice(index, 1);
    }

    function AvaliarConteudo(idConteudo){}

    function EmitirCertificado(){}

    function CriarAnotacao(idLicao){}

    function removerAnotacao(idLicao){}

    function ComprarItem(idItem){}

    function EnviarPresente(idAmigo){}

    function ReceberPresente(){}

    function MarcarConteudo(idLicao){}

    function DesmarcarConteudo(idLicao){}

    function CriarComentario(idLicao, texto){}

    function ExcluirComentario(idComentario){}

    function AdquirirConquista(){}

    function FazerAnotacao(idLicao, texto){}
}