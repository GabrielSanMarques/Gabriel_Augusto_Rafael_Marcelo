function Conquista(){
    this.codigo = codigo;
    this.descricao = descricao;
    this.cristais_bonus = cristais_bonus;
    this.xp_bonus = xp_bonus;
    
    this.CriarConquista = function(conquista){
        const db_Conquistas = JASON.parce(localStorage.getItem('db_Conquistas')) ?? []
        db_Conquistas.push(conquista)
        localStorage.setItem("db_Conquistas",JSON.stringify(db_Conquistas))
    }

    this.LerConquista = function(){JASON.parce(localStorage.getItem('db_Conquistas')) ?? []}

    this.Remover = function(conquista){
        const db_Conquistas = LerConquista()
        db_Conquistas.splice(conquista.id,1)
        setLocalStorage(db_Conquistas)
    }

    this.Update = function(conquista){
            const db_Conquistas = LerConquista();
            db_Conquistas[conquista.id] = conquista
           setLocalStorage(db_Conquistas)
    }
}