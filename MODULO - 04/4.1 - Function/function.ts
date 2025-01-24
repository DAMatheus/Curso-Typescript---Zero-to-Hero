export { }

// Exemplo 1 - Function
function somarNumeros(num1: number, num2: number): number {
    return num1 + num2
}
const resultado = somarNumeros(2, 2)
console.log(resultado)

// Exemplo 2 - Função anonima
const saudar = function (mensagem: string) {
    return mensagem
}
console.log(saudar(`Ola, mundo`))

// Exemplo 3 - Arrow Function
const saudar01 = (mensagem: string) => {
    return mensagem
}
console.log(saudar01(`Ola mundo 01`))

// Exemplo 4 - Function constructor
const saudar02 = new Function(`mensagem`, 'return "Fala " + mensagem')
console.log(saudar02('galera'))