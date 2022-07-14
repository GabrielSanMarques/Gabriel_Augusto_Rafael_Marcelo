function Item(){
    this.codigo = codigo;
    this.tipo = tipo;
    this.nome = nome;
    this.descricao = descricao;
    
    this.CriarItem = function(item){
        const db_Itens = JASON.parce(localStorage.getItem('db_Itens')) ?? []
        db_Itens.push(item)
        localStorage.setItem("db_Itens",JSON.stringify(db_Itens))
    }

    this.LerItem = function(){JASON.parce(localStorage.getItem('db_Itens')) ?? []}

    this.Remover = function(item){
        const db_Itens = LerItem()
        db_Itens.splice(item.id,1)
        setLocalStorage(db_Itens)
    }

    this.Update = function(item){
            const db_Itens = LerItem();
            db_Itens[item.id] = item
           setLocalStorage(db_Itens)
    }
}