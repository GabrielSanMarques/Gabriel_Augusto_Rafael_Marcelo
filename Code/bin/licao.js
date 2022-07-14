function Licao(){
    this.codigo = codigo;
    this.titulo = titulo;
    this.descricao = descricao;

    this.CriarLicao = function(licao){
        const db_Licaos = JASON.parce(localStorage.getItem('db_Licoes')) ?? []
        db_Licoes.push(licao)
        localStorage.setItem("db_Licoes",JSON.stringify(db_Licoes))
    }

    this.LerLicao = function(){JASON.parce(localStorage.getItem('db_Licoes')) ?? []}

    this.Remover = function(licao){
        const db_Licoes = LerLicao()
        db_Licoes.splice(licao.id,1)
        setLocalStorage(db_Licoes)
    }

    this.Update = function(licao){
            const db_Licoes = LerLicao();
            db_Licoes[licao.id] = licao
           setLocalStorage(db_Licoes)
    }
}