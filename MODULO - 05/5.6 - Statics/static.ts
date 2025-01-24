export {}

// Exemplo 1 - Propriedades Estaticas
class Funcionario {
    static contratacoes = 0

    constructor(
        private nome: string,
        private sobrenome: string,
        private titulo: string) {
            Funcionario.contratacoes++
    }
}

const funcionario1 = new Funcionario(`Matheus`, `Antunes`, `Desempregado`)
const funcionario2 = new Funcionario(`Eduarda`, `Quadros`, `Call center`)
const funcionario3 = new Funcionario(`dasda`, `Quadros`, `Call center`)

console.log(Funcionario.contratacoes)

// Exemplo 3 - Metodos estaticos

class Funcionario01 {
    private static contratacoes = 0

    constructor(
        private nome: string,
        private sobrenome: string,
        private titulo: string) {
            Funcionario01.contratacoes++
    }

    public static retornarContratacoes(){
        return Funcionario01.contratacoes
    }
}

const funcionario01 = new Funcionario01(`Matheus`, `Antunes`, `Desempregado`)
const funcionario02 = new Funcionario01(`Eduarda`, `Quadros`, `Call center`)

console.log(Funcionario01.retornarContratacoes())

// Exemplo 3 - Propriedades Estaticas

type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro {
    public nome: string
    public idade: number
    public racas: Raca[]
    public static QTD_CACHORRO_VENDIDO = 0

    constructor(nome: string, idade: number, racas: Raca[]){
        this.nome = nome
        this.idade = idade
        this.racas = racas

        Cachorro.QTD_CACHORRO_VENDIDO++
        console.log(Cachorro.QTD_CACHORRO_VENDIDO)
    }
    public exibirInformacao(): void {
        console.log(`O cachorro ${this.nome} tem ${this.idade}.`)
    }
}

const cachorro01 = new Cachorro('Pipoca', 4, ['Spitz Alemão']);
const cachorro02 = new Cachorro('Farofa', 6, ['Yorkshire']);
 