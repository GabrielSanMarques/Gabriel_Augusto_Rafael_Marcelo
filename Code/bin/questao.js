function Questao(){
    this.codigo = codigo;
    this.enunciado = enunciado;
    this.resposta_certa = resposta_certa;
    this.resposta_errada = resposta_errada;

    function CriarQuestao(questao){
        const db_Questoes = JASON.parce(localStorage.getItem('db_Questoes')) ?? []
        db_Questoes.push(questao)
        localStorage.setItem("db_Questoes",JSON.stringify(db_Questoes))
    }

    function LerQuestao(){JASON.parce(localStorage.getItem('db_Questoes')) ?? []}

    function Remover(questao){
        const db_Questoes = LerQuestao()
        db_Questoes.splice(questao.id,1)
        setLocalStorage(db_Questoes)
    }

    function Update(questao){
            const db_Questoes = LerQuestao();
            db_Questoes[questao.id] = questao
    }       setLocalStorage(db_Questoes)

}