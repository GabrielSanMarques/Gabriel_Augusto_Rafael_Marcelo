function Questao(){
    this.codigo = codigo;
    this.enunciado = enunciado;
    this.resposta_certa = resposta_certa;
    this.resposta_errada = resposta_errada;

    this.CriarQuestao = function(questao){
        const db_Questoes = JASON.parce(localStorage.getItem('db_Questoes')) ?? []
        db_Questoes.push(questao)
        localStorage.setItem("db_Questoes",JSON.stringify(db_Questoes))
    }

    this.LerQuestao = function(){JASON.parce(localStorage.getItem('db_Questoes')) ?? []}

    this.Remover = function(questao){
        const db_Questoes = LerQuestao()
        db_Questoes.splice(questao.id,1)
        setLocalStorage(db_Questoes)
    }

    this.Update = function(questao){
            const db_Questoes = LerQuestao();
            db_Questoes[questao.id] = questao
           setLocalStorage(db_Questoes)
    }
}