"use strict";
// Exemplo 1 - Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = [`Matheus Antunes`, `Desempregado`, 22];
console.log(pessoa);
// Exemplo 2 - Acessando o valor da tupla
let pessoa1;
pessoa1 = [`Matheus Antunes`, `Desempregado`, 22];
console.log(pessoa[1]);
// Exemplo 3 - Outras formas de usar Tuplas em Typescript (com labels)
let pessoa2 = [`Matheus Antunes`, `Desempregado`, 22];
console.log(pessoa2);
// Exemplo 4 - Usando Tuplas com spread operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
// Exemplo 5 - Lista Heterogênea de tuplas
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// Exemplo 6 - Uso de funções com tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas([`Matheus Duarte`, `Eduarda Quadros`], [22, 25]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa(`Matheus`, `Antunes`));
