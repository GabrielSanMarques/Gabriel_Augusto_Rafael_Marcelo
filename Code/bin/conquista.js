function Conquista(){
    this.codigo = codigo;
    this.descricao = descricao;
    this.cristais_bonus = cristais_bonus;
    this.xp_bonus = xp_bonus;
    
    function CriarConquista(conquista){
        const db_Conquistas = JASON.parce(localStorage.getItem('db_Conquistas')) ?? []
        db_Conquistas.push(conquista)
        localStorage.setItem("db_Conquistas",JSON.stringify(db_Conquistas))
    }

    function LerConquista(){JASON.parce(localStorage.getItem('db_Conquistas')) ?? []}

    function Remover(conquista){
        const db_Conquistas = LerConquista()
        db_Conquistas.splice(conquista.id,1)
        setLocalStorage(db_Conquistas)
    }

    function Update(conquista){
            const db_Conquistas = LerConquista();
            db_Conquistas[conquista.id] = conquista
    }       setLocalStorage(db_Conquistas)

}