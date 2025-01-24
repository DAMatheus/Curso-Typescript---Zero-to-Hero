export {}

// Exemplo 1

const nome: unknown = `Matheus Antunes`

console.log((nome as string).toUpperCase())

// Exemplo 2

const carro = `Corolla`

const tamanhoString: number = (<string>carro).length

console.log(tamanhoString)