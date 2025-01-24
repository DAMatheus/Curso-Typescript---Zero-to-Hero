// Exemplo 1 - Uso do If

const numeroMaximo = 100
//let contador = 100

if (contador < numeroMaximo) {
    contador++
}else {
    console.log(`Contador ja chegou a 100`)
}

// Exemplo 2 - Uso do If

const permissaoDirigir = 18

if (permissaoDirigir <= 18){
    console.log(`Apto a dirigir`)
}

// Exemplo 3 - Uso do if else

const permissaoDirigir01 = 18

if (permissaoDirigir01 <= 15){
    console.log(`Apto a dirigir`)
}else {
    console.log(`Não apto a dirigir`)
}

// Exemplo 4 - Uso do if else if

let desconto: number
let valorCompra = 11

if(valorCompra > 0 && valorCompra <= 5) {
    desconto = 5
}else if (valorCompra > 5 && valorCompra <= 10) {
    desconto = 10
}else {
    desconto = 15
}
console.log(`voce teve um desconto de: ${desconto}% de desconto`)

// Exemplo 5 - Ternario

const idadeVotacao = 15

// if (idadeVotacao >= 18) {
//     console.log(`voce pode votar`)
// }else {
//     console.log(`voce nao pode votar`)
// }

const podeVotar = (idadeVotacao >= 18)? `voce pode votar`: `voce nao pode votar`
console.log(podeVotar)