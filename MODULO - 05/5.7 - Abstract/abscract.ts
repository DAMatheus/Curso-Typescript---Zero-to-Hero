export {}

// Exemplo 1

abstract class Funcionario {
    constructor(private nome: string, private sobrenome: string){}

    abstract retornarSalario(): number
    get retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }

    emitirContraCheque(): string{
        return `${this.retornarNomeCompleto} - Salario: ${this.retornarSalario()}`
    }
}

class FuncionarioCLT extends Funcionario {
    constructor(nome: string, sobrenome: string, private salario: number){
        super(nome, sobrenome)
    }

    retornarSalario(): number {
        return this.salario
    }
}

class FuncionarioPJ extends Funcionario {
    constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number){
        super(nome, sobrenome)
    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas
    }
}

const matheus = new FuncionarioCLT(`Matheus`, `Duarte`, 3000)
const joao = new FuncionarioPJ(`Joao`, `Duarte`, 150, 160)

console.log(matheus.emitirContraCheque())
console.log(joao.emitirContraCheque())