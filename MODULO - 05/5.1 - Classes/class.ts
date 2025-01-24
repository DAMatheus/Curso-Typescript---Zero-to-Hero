// Exemplo 1 - Classes
export {}
class Pessoa {
    nome: string
    sobrenome: string

    constructor(nome: string, sobrenome: string) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa = new Pessoa (`Matheus`, `Antunes`)
console.log(pessoa)


// Exemplo 2 - Classes sem constructor
class Estudante {
    codigoEstudante: number
    nomeEstudante: string
}

const estudante = new Estudante()

estudante.codigoEstudante = 8888
estudante.nomeEstudante = `Matheus Antunes`

console.log(`${estudante.codigoEstudante} -- ${estudante.nomeEstudante}`)

// Exemplo 3 - Classes com constructor

class Estudante1 {
    codigoEstudante: number
    nomeEstudante: string

    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante
        this.nomeEstudante = nomeEstudante
    }

    listarEstudante(): void {
        console.log(`Codigo do estudante: ${this.codigoEstudante}`)
        console.log(`nome do estudante: ${this.nomeEstudante}`)
    }
}

const estudante1 = new Estudante1(9888, `Matheus Antunes`)
console.log(estudante1.codigoEstudante)
console.log(estudante1.nomeEstudante)

