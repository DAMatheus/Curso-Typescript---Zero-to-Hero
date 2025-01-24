export { }

// Exemplo 1
function somarNumeros(...numeros: number[]) {
    let total = 0
    numeros.forEach((numero) => (total +=numero))
    return total
}
console.log(somarNumeros(30, 50))
console.log(somarNumeros(30, 50, 70, 100))

// Exemplo 2
function listarFrutas(frase: string, ...frutas: string[]) {
    return frase + ` ` + frutas.join(`, `)
}
console.log(listarFrutas(`Matheus, voce precisa comprar: '🍎', '🍌', '🍓'`))

// Exemplo 3
class Produtos {
    public exibirProdutos(...produtos: string[]):void {
        for (const produto of produtos) {
            console.log(produto)
        }
    }
}

const departamentoInformatica: Produtos = new Produtos()
console.log(`Todos os produtos do departamento de Informatica dispoinveis, no estoque...: `)

departamentoInformatica.exibirProdutos(
    `Mouse`,
    `Notebook`,
    `Monitor`,
    `Teclado`
)