// Exemplo 1 - Throw Exception
function error(message: string): never {
    throw new Error(message);
}
console.log(error(`Erro de mensagem - 000`))

// Exemplo 2 - Never inserido automaticamene
function rejectMessage() {
    return error(`Erro de mensagem - 001`)
}
console.log(rejectMessage())

// Exemplo 3 - Loop infinito
const loopInfinito = function loop() {
    while(true){
        console.log(`Oi Developers`)
    }
}
//console.log(loopInfinito())

// Exemplo 4 - Diferenças entre void x never
const algumaCoisaVoid: void = null
//const algumaCoisaNever: never = null

