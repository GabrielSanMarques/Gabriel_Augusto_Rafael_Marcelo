function Materia(){
    this.codigo = codigo;
    this.nome = nome;
    this.descricao = descricao;
    this.explicacao = explicacao;

    function CriarMateria(materia){
        const db_Materias = JASON.parce(localStorage.getItem('db_Materias')) ?? []
        db_Materias.push(materia)
        localStorage.setItem("db_Materias",JSON.stringify(db_Materias))
    }

    function LerMateria(){JASON.parce(localStorage.getItem('db_Materias')) ?? []}

    function Remover(materia){
        const db_Materias = LerMateria()
        db_Materias.splice(materia.id,1)
        setLocalStorage(db_Materias)
    }

    function Update(materia){
            const db_Materias = LerMateria();
            db_Materias[materia.id] = materia
    }       setLocalStorage(db_Materias)

}