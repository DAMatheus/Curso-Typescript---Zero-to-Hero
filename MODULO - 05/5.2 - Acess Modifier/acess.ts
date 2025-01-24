export {}

// Exemplo 1 - Modificador public

class Estudante {
    codigoEstudante: number
    nomeEstudante: string
}

const estudante = new Estudante()
estudante.codigoEstudante = 201
estudante.nomeEstudante = `Matheus Antunes`
console.log(estudante.codigoEstudante)
console.log(estudante.nomeEstudante)

// Exemplo 2 - Modificador Private

class Estudante02 {
    codigoEstudante: number
    nomeEstudante: string
    private idade: number

    constructor(codigoEstudante: number, nomeEstudante: string, idade: number){
        this.codigoEstudante = codigoEstudante
        this.nomeEstudante = nomeEstudante
        this.idade = idade
    }
    retornarDadosEstudante(){
        return `Codigo aluno: ${this.codigoEstudante}. Nome do estudante ${this.nomeEstudante}. Idade do estudante: ${this.idade}`
    }
}
const estudante02 = new Estudante02(102, `Eduarda Quadros`, 25)
console.log(estudante02.retornarDadosEstudante())

// Exemplo 3 - Modificador Protected

class Estudante03 {
    codigoEstudante: number
    protected nomeEstudante: string

    constructor(codigoEstudante: number, nomeEstudante: string){
        this.codigoEstudante = codigoEstudante
        this.nomeEstudante = nomeEstudante
    }
}

class Pessoa extends Estudante03{
    private curso: string

    constructor(codigoEstudante: number, nomeEstudante: string, curso: string){
        super(codigoEstudante, nomeEstudante)
        this.curso = curso
    }
    retornarDadosAluno(){
        return `Codigo aluno: ${this.codigoEstudante}. Nome do estudante ${this.nomeEstudante}. Curso do estudante: ${this.curso}`
    }
}

const estudante03 = new Pessoa(11122, `Eduarda Quadros`, `Tecnologia em agroindustrias`)
console.log(estudante03.retornarDadosAluno())
