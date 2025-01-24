export {}

// Exemplo 1 - Default Parameters
function descontoCompra(preco:number, desconto = 0.08) {
    return preco * (1 - desconto)
}
console.log(descontoCompra(100))
// Exemplo 2
function exibirMensagem(nome: string, saudar = `Fala`) {
    return saudar+" "+nome
}
console.log(exibirMensagem('Matheus'))
// Exemplo 3

function ExibirNome(nome:string, sobrenome = `Antunes`) {
    return nome + " " + sobrenome
}
const resultado1 = ExibirNome('Matheus')
const resultado2 = ExibirNome('Matheus', undefined)
const resultado3 = ExibirNome('Matheus', 'asdasad')
console.log(resultado1)
console.log(resultado2)
