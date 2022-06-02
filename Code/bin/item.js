function Item(){
    this.codigo = codigo;
    this.tipo = tipo;
    this.nome = nome;
    this.descricao = descricao;
    
    function CriarItem(item){
        const db_Itens = JASON.parce(localStorage.getItem('db_Itens')) ?? []
        db_Itens.push(item)
        localStorage.setItem("db_Itens",JSON.stringify(db_Itens))
    }

    function LerItem(){JASON.parce(localStorage.getItem('db_Itens')) ?? []}

    function Remover(item){
        const db_Itens = LerItem()
        db_Itens.splice(item.id,1)
        setLocalStorage(db_Itens)
    }

    function Update(item){
            const db_Itens = LerItem();
            db_Itens[item.id] = item
    }       setLocalStorage(db_Itens)

}