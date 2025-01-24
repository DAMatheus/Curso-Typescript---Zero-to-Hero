export {}

// Exemplo 1 - Typeof

type alfanumerico = string | number

function exibirTipo(a: alfanumerico, b: alfanumerico) {
    if (typeof a === `number` && typeof b === `number`){
        return a + b
    }
    if (typeof a === `string` && typeof b === `string`){
        return a.concat(b)
    }
    throw new Error(`Argumentos invalidos`)
}

console.log(exibirTipo(`Glaucia`, `2`))
console.log(exibirTipo(5, 5))
// ERRO - console.log(exibirTipo(`Lemos`, 5))

// Exemplo 2 - Instanceof

class Carro {
    nome: string
    marca: string

    constructor(nome: string, marca: string){
        this.nome = nome
        this.marca = marca
    }
}

class Moto {
    nome: string
    ano: number

    constructor(nome: string, ano: number){
        this.nome = nome
        this.ano = ano
    }
}

function detalheVeiculo(veiculo: Carro | Moto) {
    if (veiculo instanceof Carro) {
        return `O nome do carro é: ${veiculo.nome} e a marca é: ${veiculo.marca}`
    }else if (veiculo instanceof Moto) {
        return `O nome da Moto é: ${veiculo.nome} e o ano é: ${veiculo.ano}`
    }
}

const carro = new Carro('Gol', 'Volkswagen');
console.log(detalheVeiculo(carro));

const moto = new Moto('CBR', 2020);
console.log(detalheVeiculo(moto));

// Exemplo 3 - in

interface Animal {
    grupo: string
}

class Peixe implements Animal {
    grupo: string
    corPeixe: string

    constructor(grupo: string, corPeixe: string){
        this.grupo = grupo
        this.corPeixe = this.corPeixe
    }
}

class Passaro implements Animal {
    grupo: string
    corPena: string

    constructor(grupo: string, corPena: string){
        this.grupo = grupo
        this.corPena = this.corPena
    }
}

function nadar(grupo: string) {
    console.log(`O ${grupo} esta nadando`)
}

function voar(grupo: string) {
    console.log(`O ${grupo} esta voando`)
}

function mover(animal: Animal) {
    if(`corPeixe` in animal) {
        nadar((animal as Peixe).grupo)
    }else if (`corPena` in animal) {
        voar((animal as Passaro).grupo)
    }
}

mover(new Peixe('Peixe', 'Azul'));
mover(new Passaro('Pássaro', 'Branco'));
