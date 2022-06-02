function Secao(){
    this.codigo = codigo;
    this.nome = nome;
    this.descricao = descricao;

    function CriarSecao(secao){
        const db_Secaoes = JASON.parce(localStorage.getItem('db_Secaoes')) ?? []
        db_Secaoes.push(secao)
        localStorage.setItem("db_Secaoes",JSON.stringify(db_Secaoes))
    }

    function LerSecao(){JASON.parce(localStorage.getItem('db_Secaoes')) ?? []}

    function Remover(secao){
        const db_Secaoes = LerSecao()
        db_Secaoes.splice(secao.id,1)
        setLocalStorage(db_Secaoes)
    }

    function Update(secao){
            const db_Secaoes = LerSecao();
            db_Secaoes[secao.id] = secao
    }       setLocalStorage(db_Secaoes)


}