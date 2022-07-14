function Exemplo(){
    this.codigo = codigo;
    this.enunciado = enunciado;
    this.resposta = resposta;

    this.CriarExemplo = function(exemplo){
        const db_Exemplos = JASON.parce(localStorage.getItem('db_Exemplos')) ?? []
        db_Exemplos.push(exemplo)
        localStorage.setItem("db_Exemplos",JSON.stringify(db_Exemplos))
    }

    this.LerExemplo = function(){JASON.parce(localStorage.getItem('db_Exemplos')) ?? []}

    this.Remover = function(exemplo){
        const db_Exemplos = LerExemplo()
        db_Exemplos.splice(exemplo.id,1)
        setLocalStorage(db_Exemplos)
    }

    this.Update = function(exemplo){
            const db_Exemplos = LerExemplo();
            db_Exemplos[exemplo.id] = exemplo
           setLocalStorage(db_Exemplos)
    }
}