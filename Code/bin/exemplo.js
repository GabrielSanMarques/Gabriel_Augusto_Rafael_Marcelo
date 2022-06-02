function Exemplo(){
    this.codigo = codigo;
    this.enunciado = enunciado;
    this.resposta = resposta;

    function CriarExemplo(exemplo){
        const db_Exemplos = JASON.parce(localStorage.getItem('db_Exemplos')) ?? []
        db_Exemplos.push(exemplo)
        localStorage.setItem("db_Exemplos",JSON.stringify(db_Exemplos))
    }

    function LerExemplo(){JASON.parce(localStorage.getItem('db_Exemplos')) ?? []}

    function Remover(exemplo){
        const db_Exemplos = LerExemplo()
        db_Exemplos.splice(exemplo.id,1)
        setLocalStorage(db_Exemplos)
    }

    function Update(exemplo){
            const db_Exemplos = LerExemplo();
            db_Exemplos[exemplo.id] = exemplo
    }       setLocalStorage(db_Exemplos)

}