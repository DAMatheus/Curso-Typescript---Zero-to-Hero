export {}

// Exemplo 1 - Interface simples
interface Pessoa {
    nome: string
    sobrenome: string
    idade: number
}

function exibirNome(pessoa: Pessoa){
    return `
    Nome: ${pessoa.nome}
    Sobrenome: ${pessoa.sobrenome}
    Idade: ${pessoa.idade}`
}

const matheus = {
    nome: `Matheus`,
    sobrenome: `Antunes`,
    idade: 22
}

console.log(exibirNome(matheus))

// Exemplo 2 Interface com propriedades opcionais

interface Livro {
    titulo: string
    autor: string
    paginas?: number
}

function exibirLivro(livro: Livro) {
    return `
    Titulo do livro: ${livro.titulo}
    Autor: ${livro.autor}
    Paginas: ${livro.paginas || `Não informado.`}`
}

const senhordosaneis = {
    titulo: `Senhor dos aneis`,
    autor: `J. R. R. Tolkien`,
    idade: 60
}

console.log(exibirLivro(senhordosaneis))

// Exemplo 3 - Interfaces com propriedades de somente leitura e opcionais

interface Carro {
    readonly modelo: string
    ano: number
    valor?: number
}

const carro: Carro = {
    modelo: `Fusca`,
    ano: 1969
}
console.log(carro)

//Exemplo 4 - Interface com implement class

interface IAnimal {
    nome: string
    idade: number
    estaVivo: boolean
    comer(tipoComida: string): void
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    comer(tipoComida: string) {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}`)
    }
}

const gato = new Gato (`TOTO`, 10, true)
console.log(gato)
gato.comer(`Ração`)

// Exemplo 5 - Interface vs Type Alias

interface Pessoa_02 {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Pessoa_03 = {
    nome: string;
    sobrenome: string;
    idade: number;
}




