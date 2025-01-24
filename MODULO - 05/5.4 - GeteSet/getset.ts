export {}

// Exemplo 1 - GET
class Quadrado {
    private _largura = 6
    private _altura = 12

    get calcularQuadrado(){
        return this._altura * this._largura
    }
}

console.log(new Quadrado().calcularQuadrado)

// Exemplo 2 - Set

class Pessoa {
    nome: string

    retornarNomePessoa(setNomePessoa: string){
        this.nome = setNomePessoa
    }
}
const pessoa = new Pessoa()
pessoa.retornarNomePessoa(`Matheus Antunes`)
console.log(pessoa.nome)

// Exemplo 3 - Get

class Estudante {
    private _nome = `Eduarda Quadros`
    private _semestre: number
    private _curso: string

    public get nomeEstudante(){
        return this._nome
    }
}

const estudante = new Estudante()
const resultado = estudante.nomeEstudante
console.log(resultado)

// Exemplo 4 - Set

class Estudante01 {
    nome: string
    semestre: number
    curso: string

    constructor(nomeEstudante: string, semestreEstudante: number, cursoEstudante: string){
        this.nome = nomeEstudante
        this.semestre = semestreEstudante
        this.curso = cursoEstudante
    }

    public get cursos(){
        return this.curso
    }

    public set cursos(setCurso: string){
        this.curso = setCurso
    }
}
const estudante01 = new Estudante01(`Matheus Antunes`, 5, `ADS`)
console.log(estudante01)

estudante01.curso = `Analise e desenvolvimento de sistemas`

console.log(`Curso atualizado`, estudante01.cursos)