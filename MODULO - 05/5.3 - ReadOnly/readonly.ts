export {}

// Exemplo 1
class Funcionario {
    readonly dataNascimento: Date

    constructor(dataNascimento: Date){
        this.dataNascimento = dataNascimento
    }
}
const funcionario = new Funcionario(new Date(2002, 2, 15))
console.log(funcionario.dataNascimento)
//funcionario.dataNascimento = new Date(2002, 2, 15)

// Exemplo 2

class Funcionario01 {
    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento
    }
}

// Exemplo 3

class Funcionario03 {
    nome: string
    readonly codigoFuncionario: number

    constructor(nome: string, codigo: number ){
        this.nome = nome
        this.codigoFuncionario = codigo
    }
}

const func = new Funcionario03(`Matheus Antunes`, 112233)
func.nome = `Sandramar`
//func.codigoFuncionario = 114525
console.log(func)

// Exemplo 4 - Interface

interface IFuncionario {
    codigoFuncionario: number
    nomeEmpregado: string
}

const funcionario001: readonly<IFuncionario> = {
    codigoFuncionaro: 114455,
    nomeEmpregado: `Cleusa`
}