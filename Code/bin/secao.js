function Secao(){
    this.codigo = codigo;
    this.nome = nome;
    this.descricao = descricao;

    this.CriarSecao = function(secao){
        const db_Secaoes = JASON.parce(localStorage.getItem('db_Secaoes')) ?? []
        db_Secaoes.push(secao)
        localStorage.setItem("db_Secaoes",JSON.stringify(db_Secaoes))
    }

    this.LerSecao = function(){JASON.parce(localStorage.getItem('db_Secaoes')) ?? []}

    this.Remover = function(secao){
        const db_Secaoes = LerSecao()
        db_Secaoes.splice(secao.id,1)
        setLocalStorage(db_Secaoes)
    }

    this.Update = function(secao){
            const db_Secaoes = LerSecao();
            db_Secaoes[secao.id] = secao
            setLocalStorage(db_Secaoes)
    }

}