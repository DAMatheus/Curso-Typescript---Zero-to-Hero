// Exemplo 1 - Uso simples de Tuplas em TypeScript
let pessoa: [string, string, number]
pessoa = [`Matheus Antunes`, `Desempregado`, 22]
console.log(pessoa)

// Exemplo 2 - Acessando o valor da tupla
let pessoa1: [string, string, number]
pessoa1 = [`Matheus Antunes`, `Desempregado`, 22]
console.log(pessoa[1])

// Exemplo 3 - Outras formas de usar Tuplas em Typescript (com labels)
let pessoa2: [nome: string, Cargo: string, idade: number] = [`Matheus Antunes`, `Desempregado`, 22]
console.log(pessoa2)

// Exemplo 4 - Usando Tuplas com spread operator
let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas)

// Exemplo 5 - Lista Heterogênea de tuplas
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas]
console.log(listaFrutas2)

// Exemplo 6 - Uso de funções com tuplas
function listarPessoas(nomes: string[], idades: number[]) {
    return[...nomes, ...idades]
}
let resultado = listarPessoas([`Matheus Duarte`, `Eduarda Quadros`], [22, 25])
console.log(resultado)

// Exemplo 7 - Labeled tuplas com spread operator numa função
type Nome =
            [primeiroNome: string, sobrenome: string] |
            [primeiroNome: string, nomeMeio:string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return[...nome]
}
console.log(criarPessoa(`Matheus`, `Antunes`))