// Exemplo 1 - Tipo Unknown
let valorVariavel: unknown;
valorVariavel = 123
valorVariavel = true
valorVariavel = `Oi, tudo bem?`

console.log(valorVariavel)

// Exemplo 2 - Erro ao tentar atribuir valor do tipo `unknown` a outros tipos
/* let valor: unknown

let valor1: boolean = valor
let valor1: string = valor
let valor1: number = valor */

// Exemplo 3 - Diferença entre 'any' vs 'unknown'

let algumaCoisaAny: any
let algumaCoisaUnknown: unknown

//console.log(algumaCoisaAny.toFixed())

if (typeof algumaCoisaUnknown === `number`) {
    console.log(algumaCoisaUnknown.toFixed(2))
}