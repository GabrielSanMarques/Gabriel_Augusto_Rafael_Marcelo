function Licao(){
    this.codigo = codigo;
    this.titulo = titulo;
    this.descricao = descricao;

    function CriarLicao(licao){
        const db_Licaos = JASON.parce(localStorage.getItem('db_Licoes')) ?? []
        db_Licoes.push(licao)
        localStorage.setItem("db_Licoes",JSON.stringify(db_Licoes))
    }

    function LerLicao(){JASON.parce(localStorage.getItem('db_Licoes')) ?? []}

    function Remover(licao){
        const db_Licoes = LerLicao()
        db_Licoes.splice(licao.id,1)
        setLocalStorage(db_Licoes)
    }

    function Update(licao){
            const db_Licoes = LerLicao();
            db_Licoes[licao.id] = licao
    }       setLocalStorage(db_Licoes)

}