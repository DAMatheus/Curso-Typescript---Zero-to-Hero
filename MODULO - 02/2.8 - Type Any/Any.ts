// Exemplo 1 -  Tipo Any
const a: any = 34
const b: any = [`Glaucia`]
const result = a + b
console.log(result)

// Exemplo 2 - Quando o tipo Any é inferido implicitamente
// let frase
// frase = `Oi pessoal, tudo bem?`
// console.log(frase)

// Exemplo 3 - Quando devemos usar Any
const formulario: {[campoFormulario: string]: any} = {
    nome: `Matheus`,
    sobrenome: `Antunes`,
    idade: 22
}
console.log(formulario)