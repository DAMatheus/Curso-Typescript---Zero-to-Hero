// ==> Variaveis [Type Annotation]
let nome: string = `Matheus Antunes`
console.log(nome)

// ==> Arrays [Type Annotation]
let animais: string[] = [`Elefante`, `Cachorro`, `Gato`, `Panda`]
console.log(animais)
let contagem: number[] = [1, 2, 3, 4, 5]
console.log(contagem)

// ==> Objetos [Type Annotation]
let carro: {
    nome: string,
    ano: number,
    preço: number
}
carro = {nome: `Fusca`, ano: 1996, preço: 5000}
console.log(carro)

// ==> Function [Type Annotation]
function multiplicarNumeros (num1: number, num2: number) {
    return num1 * num2
}

console.log(multiplicarNumeros(5, 5))